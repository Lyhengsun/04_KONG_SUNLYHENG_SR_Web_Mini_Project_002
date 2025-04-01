import { registerService } from "@/service/auth/register.service";

export const registerAction = async (registerFormData) => {
  try {
    const username = registerFormData.get("username");
    const email = registerFormData.get("email");
    const password = registerFormData.get("password");

    const registerData = {
      username: username,
      email: email,
      password: password,
    };

    const registerResponse = await registerService(registerData);

    return { success: true, data: registerResponse };
  } catch (error) {}
};
