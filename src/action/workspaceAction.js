"use server";

import {
  addNewWorkspaceService,
  patchWorkspaceFavoriteService,
} from "@/service/workspace.service";
import { revalidateTag } from "next/cache";

export const addNewWorkspaceAction = async (workspaceName) => {
  try {
    const responseData = await addNewWorkspaceService(workspaceName);
    revalidateTag("workspaces");
    return responseData;
  } catch (error) {
    console.log("addNewWorkspaceAction Error : ", error);
    return { success: false, message: error };
  }
};

export const patchWorkspaceFavoriteAction = async (workspaceId, favorite) => {
  try {
    const responseData = await patchWorkspaceFavoriteService(
      workspaceId,
      favorite
    );
    revalidateTag("workspaces");
    return responseData;
  } catch (error) {
    console.log("patchWorkspaceFavoriteAction Error : ", error);
    return { success: false, message: error };
  }
};
