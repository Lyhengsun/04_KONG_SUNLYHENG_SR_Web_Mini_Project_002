import { baseUrl } from "../constants";

export const registerService = async (userData) => {
  try {
    const res = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};
