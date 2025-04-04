"use client";
import React from "react";
import PopupFormProviderComponent from "../../_components/PopupFormComponent";
import { Button } from "@/components/ui/button";
import { PlusSquareIcon } from "lucide-react";
import { TASK_TAG } from "@/app/data/taskTags";
import { addNewTaskAction } from "@/action/taskAction";
import { useParams } from "next/navigation";

const WorkspaceDetailLayout = ({ children }) => {
  const { workspaceId } = useParams();
  const onSubmitNewTask = ({ taskTitle, taskDetails, tag, endDate }) => {
    // console.log("taskTitle : ", taskTitle);
    // console.log("taskDetails : ", taskDetails);
    // console.log("tag : ", tag);
    // console.log("endDate : ", endDate);
    // console.log("params : ", params);

    const resInfo = addNewTaskAction(
      workspaceId,
      taskTitle,
      taskDetails,
      tag,
      endDate
    );
    return resInfo;
  };

  return (
    <div className="grow">
      {children}
      <div className="fixed bottom-0 right-0 pr-20 pb-8">
        <PopupFormProviderComponent
          handleOnSubmit={onSubmitNewTask}
          inputs={{
            taskTitle: { label: "Task Title" },
            taskDetails: { label: "Task Details" },
            tag: {
              label: "Tag",
              type: "select",
              options: Object.values(TASK_TAG),
            },
            endDate: { label: "End Date", type: "datetime-local" },
          }}
        >
          <Button className="rounded-full bg-blue-400 text-white">
            <PlusSquareIcon />
            New Task
          </Button>
        </PopupFormProviderComponent>
      </div>
    </div>
  );
};

export default WorkspaceDetailLayout;
