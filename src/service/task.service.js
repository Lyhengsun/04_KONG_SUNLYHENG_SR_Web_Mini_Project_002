const { default: headerToken } = require("@/app/api/headerToken");
const { baseUrl } = require("./constants");

export const getAllTasksByWorkspaceId = async (
  workspaceId,
  pageNo = 0,
  pageSize = 10,
  sortBy = "taskId",
  sortDirection = "ASC"
) => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/tasks/workspace/${workspaceId}?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
      {
        headers: header,
        next: {
          tags: "tasks",
        },
      }
    );

    const { payload } = await res.json();
    return payload;
  } catch (error) {
    console.log("getAllTasksByWorkspaceId Error : ", error);
  }
};

export const addNewTaskService = async (workspaceId, newTask) => {
  try {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/task/workspace/${workspaceId}`, {
      headers: header,
      method: "POST",
      body: JSON.stringify(newTask),
    });

    const { status, message } = await res.json();
    if (status === "CREATED") {
      return { success: true, message: message };
    }
    return { success: false, message: message };
  } catch (error) {
    console.log("addNewTaskService Error : ", error);
    return { success: false, nessage: error };
  }
};

export const patchTaskStatusService = async (workspaceId, taskId, status) => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/task/${taskId}/workspace/${workspaceId}/status?status=${status}`,
      {
        headers: header,
        method: "PATCH",
      }
    );
    const data = await res.json();
    console.log(" patchTaskStatusService data : ", data);
  } catch (error) {
    console.log("patchTaskStatusService Error : ", error);
  }
};
