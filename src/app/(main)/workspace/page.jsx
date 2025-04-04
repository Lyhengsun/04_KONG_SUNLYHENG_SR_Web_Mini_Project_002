import { getAllWorkspaceService } from "@/service/workspace.service";
import { redirect } from "next/navigation";
import React from "react";

const WorkspacePage = async () => {
  const workspaceData = await getAllWorkspaceService(0, 1);
  if (workspaceData.length > 0) {
    redirect(`/workspace/${workspaceData[0].workspaceId}`);
  }

  return (
    <div className="w-full h-dvh flex items-center justify-center">
      Please open a workspace or create one
    </div>
  );
};

export default WorkspacePage;
