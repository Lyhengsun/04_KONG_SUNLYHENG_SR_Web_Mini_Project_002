"use client";
import Logo from "@/components/logo";
import { LogOutIcon, PlusSquareIcon, StarIcon } from "lucide-react";
import React from "react";
import WorkspaceTitleLinkComponent from "./WorkspaceTitleLinkComponent";
import PopupFormProviderComponent from "./PopupFormComponent";
import { addNewWorkspaceAction } from "@/action/workspaceAction";
import { signOut } from "next-auth/react";

const SideBarComponent = ({ workspaces = [] }) => {
  const favoriteWorkspaces = workspaces.filter((w) => w.isFavorite);

  const onNewWorkspaceSubmit = async ({ workspaceName }) => {
    const resInfo = await addNewWorkspaceAction(workspaceName);
    return resInfo;
  };

  const handleOnClickLogout = () => {
    signOut();
  };

  return (
    <div className="border-r-2 bg-white h-dvh w-[20rem] flex flex-col items-center overflow-y-scroll">
      <div className="py-14">
        <Logo />
      </div>
      <div className="flex justify-between w-full px-8 pt-4 pb-2 items-center">
        <p className="font-bold text-gray-400 text-2xl font-sf-pro-display">
          Workspace
        </p>
        <PopupFormProviderComponent
          formTitle="Create New Workspace"
          submitBtnLabel="Create"
          inputs={{
            workspaceName: { label: "Workspace Name", type: "text" },
          }}
          handleOnSubmit={onNewWorkspaceSubmit}
        >
          <PlusSquareIcon size={25} className="text-gray-400" />
        </PopupFormProviderComponent>
      </div>
      {workspaces.map((workspace) => (
        <WorkspaceTitleLinkComponent
          key={workspace.workspaceId}
          workspace={workspace}
        />
      ))}
      <div className="flex justify-between w-full px-8 pt-4 pb-2 items-center mt-8">
        <p className="font-bold text-gray-400 text-2xl font-sf-pro-display">
          Favorite
        </p>
        <StarIcon size={25} className="text-gray-400" />
      </div>
      {favoriteWorkspaces.map((workspace) => (
        <WorkspaceTitleLinkComponent
          key={workspace.workspaceId}
          workspace={workspace}
        />
      ))}
      <button
        onClick={handleOnClickLogout}
        className="text-gray-400 flex gap-x-1 font-bold text-xl mt-12 px-8 pb-8 justify-start w-full"
      >
        <LogOutIcon size={25} />
        Logout
      </button>
    </div>
  );
};

export default SideBarComponent;
