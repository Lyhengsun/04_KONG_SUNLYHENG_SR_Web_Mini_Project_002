import headerToken from "@/app/api/headerToken";
import { baseUrl } from "./constants";

export const getAllWorkspaceService = async (
  pageNo = 0,
  pageSize = 10,
  sortBy = "workspaceName",
  sortDirection = "ASC"
) => {
  const header = await headerToken();
  try {
    const res = await fetch(
      `${baseUrl}/workspaces?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
      { headers: header, next: { tags: "workspaces" } }
    );
    const { payload } = await res.json();
    return payload;
  } catch (error) {
    console.log("getAllWorkspaceService Error : ", error);
  }
};

export const getWorkspaceByIdService = async (workspaceId) => {
  const header = await headerToken();
  try {
    const res = await fetch(`${baseUrl}/workspace/${workspaceId}`, {
      headers: header,
    });
    const data = await res.json();

    if (data.status === "OK") {
      return { success: true, data: data.payload, error: null };
    }
    return { success: false, data: null, error: data.message };
  } catch (error) {
    console.log("getWorkspaceByIdService Error : ", error);
    return { success: false, data: null, error: error };
  }
};

export const addNewWorkspaceService = async (workspaceName) => {
  const header = await headerToken();
  const newWorkspaceData = { workspaceName };
  try {
    const res = await fetch(`${baseUrl}/workspace`, {
      headers: header,
      method: "POST",
      body: JSON.stringify(newWorkspaceData),
    });

    const { status, message } = await res.json();

    if (status === "CREATED") {
      return { success: true, message: message };
    }
    return { success: false, message: message };
  } catch (error) {
    console.log("addNewWorkspaceService Error : ", error);
    return { success: false, message: error };
  }
};

export const patchWorkspaceFavoriteService = async (workspaceId, favorite) => {
  const header = await headerToken();
  const favoriteString = favorite ? "true" : "false";
  try {
    const res = await fetch(
      `${baseUrl}/workspace/${workspaceId}/favorite?favorite=${favoriteString}`,
      {
        headers: header,
        method: "PATCH",
      }
    );

    const { message, status } = await res.json();
    if (status === "OK") {
      return { success: true, message: message };
    }
    return { success: false, message: message };
  } catch (error) {
    console.log("patchWorkspaceFavoriteService Error: ", error);
    return { success: false, message: error };
  }
};
