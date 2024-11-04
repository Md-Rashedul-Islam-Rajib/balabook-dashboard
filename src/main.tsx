import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar.tsx";
import AppSidebar from "./components/ui/shared/AppSidebar.tsx";
import DataTable from "./components/ui/shared/DataTable.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        {/* <div className="flex-1 flex flex-col"> */}
          <main className="w-full p-4">
            <SidebarTrigger className="-ml-2" />
            <DataTable />
          </main>
        </div>
      {/* </div> */}
    </SidebarProvider>
  </StrictMode>
);
