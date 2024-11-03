import React, { useState } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
  ColumnDef,
  SortingState,
  //   Table,
} from "@tanstack/react-table";
import { ArrowLeftIcon, ArrowRightIcon, PinLeftIcon, PinRightIcon } from "@radix-ui/react-icons";

type Item = {
  description: string;
  type: string;
  price: string;
};

const tableData: Item[] = [
  { description: "Devops", type: "Service", price: "€500.00" },
  { description: "hello", type: "Service", price: "€100.00" },
  { description: "pakoray", type: "Good", price: "€50.00" },
  { description: "some", type: "Service", price: "€50.00" },
  { description: "Website", type: "Service", price: "€1000.00" },
];

const DataTable: React.FC = () => {
  const [data] = useState<Item[]>([...tableData]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const columnHelper = createColumnHelper<Item>();

  const columns: ColumnDef<Item, "">[] = [
    columnHelper.accessor("description", {
      cell: (info) => info.getValue(),
      header: () => <span className="flex items-center">Description</span>,
    }),
    columnHelper.accessor("type", {
      cell: (info) => info.getValue(),
      header: () => <span className="flex items-center">Type</span>,
    }),
    columnHelper.accessor("price", {
      cell: (info) => info.getValue(),
      header: () => <span className="flex items-center">Price</span>,
    }),
    {
      id: "actions",
      header: () => <span className="flex items-center"></span>,
      cell: () => (
        <button className="bg-black text-white rounded px-2 py-1">
          Actions
        </button>
      ),
    },
  ];

  const table = useReactTable<Item>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: { sorting, globalFilter },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="p-4 w-full bg-gray-100 rounded-xl">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Items</h2>
        <button className="bg-yellow-400 text-white rounded px-4 py-2">
          Add New Item
        </button>
      </div>

      <div className="mb-4 relative">
        <input
          type="text"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
          className="search-input mb-4 p-2 border border-white outline-none focus:outline-white rounded-lg bg-white transition-all duration-700 w-full mx-auto block"
        />
      </div>

      <div className="rounded-lg shadow-md overflow-hidden border w-full">
        <table className="w-full text-left border-collapse bg-white">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="p-4 font-semibold text-gray-700 border-b"
                  >
                    <span
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-4 border-b text-gray-600">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                {/* <td className="p-4 text-right">
                  <button className="bg-black text-white rounded px-2 py-1">
                    Actions
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center pt-5">
        {/* <div className="flex items-center m-4">
          <span className="font-medium mr-2">Items per page</span>
          <select
            className="border border-gray-300 rounded-md shadow-md"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[2,4, 8].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
              </div> */}
              
        <div className="pr-4 flex items-center gap-3">
          <button
            className="cursor-pointer"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <PinLeftIcon />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ArrowLeftIcon />
          </button>
          <span>{table.getState().pagination.pageIndex + 1}</span>

          <button
            className="cursor-pointer"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ArrowRightIcon />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => table.setPageIndex(table.getPageCount() -1)}
            disabled={!table.getCanNextPage()}
          >
            <PinRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
