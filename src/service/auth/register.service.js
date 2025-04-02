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

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
