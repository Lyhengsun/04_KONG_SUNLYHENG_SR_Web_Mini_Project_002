"use client";

import { patchTaskStatusAction } from "@/action/taskAction";
import { monthToString } from "@/app/data/monthToString";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock, Ellipsis } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

export default function CardComponent({ task }) {
  const endDate = new Date(task.endDate);
  const { workspaceId } = useParams();

  const tailwindStatusColor = {
    text: "text-not-started",
    border: "border-not-started",
    bg: "bg-not-started",
  };
  if (task.status === "IN_PROGRESS") {
    tailwindStatusColor["text"] = "text-in-progress";
    tailwindStatusColor["border"] = "border-in-progress";
    tailwindStatusColor["bg"] = "bg-in-progress";
  }
  if (task.status === "FINISHED") {
    tailwindStatusColor["text"] = "text-finished";
    tailwindStatusColor["border"] = "border-finished";
    tailwindStatusColor["bg"] = "bg-finished";
  }

  const handleOnChangeStatus = async (value) => {
    patchTaskStatusAction(workspaceId, task.taskId, value);
  };

  return (
    <div className="border border-gray-300 rounded-xl mt-6">
      <div className="p-5">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold capitalize">{task.taskTitle}</h2>
          <Ellipsis />
        </div>

        {/* task detials */}
        <p className="line-clamp-2 text-light-steel-blue my-2 h-12">
          {task.taskDetails}
        </p>

        <div className="flex justify-between items-center mt-4">
          {/* tag */}
          <p className="bg-purple-100 text-purple-500 py-1.5 px-3 rounded-lg capitalize">
            {task.tag.toLowerCase()}
          </p>

          {/* status */}
          <div
            className={`rounded-full w-8 h-8 ${tailwindStatusColor.bg}`}
          ></div>
        </div>
      </div>

      {/* progress */}
      <div className="flex justify-between items-center border-t border-t-gray-300 p-5">
        <Select onValueChange={handleOnChangeStatus}>
          <SelectTrigger
            className={`w-36 truncate ${tailwindStatusColor.border} ${tailwindStatusColor.text}`}
          >
            <SelectValue placeholder={task.status} />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="NOT_STARTED">NOT_STARTED</SelectItem>
            <SelectItem value="IN_PROGRESS">IN_PROGRESS</SelectItem>
            <SelectItem value="FINISHED">FINISHED</SelectItem>
          </SelectContent>
        </Select>

        {/* date */}
        <p className="flex gap-1 text-light-steel-blue items-center justify-end">
          <Clock size={22} />
          <span>
            {monthToString[endDate.getMonth()]} {endDate.getDate()},{" "}
            {endDate.getFullYear()}
          </span>
        </p>
      </div>
    </div>
  );
}
