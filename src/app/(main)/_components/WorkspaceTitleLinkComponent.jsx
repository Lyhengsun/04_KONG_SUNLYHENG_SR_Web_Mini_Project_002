import { MoreHorizontalIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const WorkspaceTitleLinkComponent = ({ workspace }) => {
  return (
    <Link
      href={`/workspace/${workspace.workspaceId}`}
      className="flex items-center justify-between w-full px-8 py-2 hover:bg-gray-200"
    >
      <div className="flex items-center gap-x-2">
        <div className="w-2 aspect-square rounded-full bg-black mx-2"></div>
        <p className="text-xl font-medium font-sf-pro-display">
          {workspace.workspaceName}
        </p>
      </div>

      <MoreHorizontalIcon />
    </Link>
  );
};

export default WorkspaceTitleLinkComponent;
