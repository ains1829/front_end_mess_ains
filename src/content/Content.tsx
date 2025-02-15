import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/pages/components/sidebar/app-sidebar";
import { Outlet } from "react-router";

function Content() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-gray-50">
        <SidebarTrigger />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
export default Content;
