import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import logo from "../../../../public/logo.svg";
import { ChevronUpIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";

const AppSidebar = () => {
  const items = [
    {
      title: "Home",
      url: "#",
      // icon: Home,
    },
    {
      title: "Inbox",
      url: "#",
      // icon: Inbox,
    },
    {
      title: "Calendar",
      url: "#",
      // icon: Calendar,
    },
    {
      title: "Search",
      url: "#",
      // icon: Search,
    },
    {
      title: "Settings",
      url: "#",
      // icon: Settings,
    },
  ];
  return (
    <>
      <Sidebar className="p-4">
        <SidebarGroup>
          <img src={logo} alt="Balabook Logo" className="size-20" />
          <div className="pt-8 pb-4 flex gap-4">
            <div>
              <Avatar>
                <AvatarImage src="#" />
                <AvatarFallback className="border-4 border-indigo-600 text-indigo-600 font-bold">
                  NI
                </AvatarFallback>
              </Avatar>
            </div>
            <div>
              <Button variant="outline" className="rounded-full size-10">
                <PlusIcon />
              </Button>
            </div>
          </div>
        </SidebarGroup>
        <SidebarContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="border-t-2">
          <div className="flex items-center gap-2">
            <div>
              <Avatar>
                <AvatarImage src="#" />
                <AvatarFallback className="bg-[#ffed37] font-bold">
                  NI
                </AvatarFallback>
              </Avatar>
            </div>
            <DropdownMenu>
              <SidebarGroup>
                <SidebarGroupLabel asChild>
                  <DropdownMenuTrigger className="flex justify-between">
                    <span className="text-lg mr-4">Nicolas IP</span>
                    <ChevronUpIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </DropdownMenuTrigger>
                </SidebarGroupLabel>

                <DropdownMenuContent side="top" className="w-72 md:w-64 mr-12 lg:w-[250px] lg:mr-11">
                  <DropdownMenuItem>Company Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
                <SidebarGroupContent />
              </SidebarGroup>
            </DropdownMenu>
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
};

export default AppSidebar;
