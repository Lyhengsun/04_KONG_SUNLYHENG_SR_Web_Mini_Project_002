"use server";

import { revalidateTag } from "next/cache";

const {
  addNewTaskService,
  patchTaskStatusService,
} = require("@/service/task.service");

export const addNewTaskAction = async (
  workspaceId,
  taskTitle,
  taskDetails,
  tag,
  endDate
) => {
  try {
    const resInfo = await addNewTaskService(workspaceId, {
      taskTitle: taskTitle,
      taskDetails: taskDetails,
      tag: tag,
      endDate: endDate,
    });

    if (resInfo.success) {
      revalidateTag("tasks");
    }

    return resInfo;
  } catch (error) {
    console.log("addNewTaskAction Error : ", error);
  }
};

export const patchTaskStatusAction = async (workspaceId, taskId, status) => {
  try {
    patchTaskStatusService(workspaceId, taskId, status);
    revalidateTag("tasks");
  } catch (error) {
    console.log("patchTaskStatusAction Error : ", error);
  }
};
