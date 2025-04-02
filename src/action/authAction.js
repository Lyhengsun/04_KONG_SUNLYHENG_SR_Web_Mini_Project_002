"use server";
import { registerService } from "@/service/auth/register.service";

export const registerAction = async (registerFormData) => {
  try {
    const username = registerFormData["username"];
    const email = registerFormData["email"];
    const password = registerFormData["password"];

    const registerData = {
      username: username,
      email: email,
      password: password,
    };

    const registerResponse = await registerService(registerData);
    console.log("register response : ", registerResponse);

    return { success: true, data: registerResponse };
  } catch (error) {
    return { success: false, data: { message: "Error : " + error } };
  }
};
