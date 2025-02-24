import { usegetUserbytoken } from "@/api/users/query-data";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/pages/components/sidebar/app-sidebar";
import { User, UserContext } from "@/types/messages/user-type-message";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";

function Content() {
  const [user, setUser] = useState<User | null>(null);
  const user_token = usegetUserbytoken();
  useEffect(() => {
    if (user_token.isSuccess) {
      setUser(user_token.data.user);
    }
  }, [user_token.isSuccess]);
  if (user_token.isPending) {
    return <>loading...</>;
  }
  if (user_token.isError) {
    return <>Something wrong...</>;
  }
  return (
    <UserContext.Provider value={user}>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-gray-50">
          <SidebarTrigger />
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </UserContext.Provider>
  );
}
export default Content;
