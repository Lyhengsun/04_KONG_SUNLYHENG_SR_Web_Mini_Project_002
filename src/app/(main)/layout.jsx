import React from "react";
import SideBarComponent from "./_components/SideBarComponent";
import { getAllWorkspaceService } from "@/service/workspace.service";
import BreadcrumbComponent from "./workspace/_components/BreadcrumbComponent";
import ProfileComponent from "./workspace/_components/ProfileComponent";
import { BellIcon } from "lucide-react";

const MainLayout = async ({ children }) => {
  const workspaces = await getAllWorkspaceService();
  return (
    <div className="flex">
      <SideBarComponent workspaces={workspaces} />
      <div className="grow flex flex-col">
        <div className="flex justify-between px-16 py-4 items-center">
          <BreadcrumbComponent />
          <div className="flex gap-x-2 items-center">
            <BellIcon size={25} className="mr-6" />
            <ProfileComponent />
          </div>
        </div>
        <hr />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
