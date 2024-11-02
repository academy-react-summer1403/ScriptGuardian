import { useMutation } from "@tanstack/react-query";
import http from "../../../../interceptors/interceptors";
import { ApiRoutes } from "../../ApiRoutes/ApiRoutes";

const Login = async (user) => {
  try {
    const response = await http.post(ApiRoutes.LOGIN_URL, user);
    return response;
  } catch (error) {
    return false;
  }
};

export const useLogin = () => {
  return useMutation({
    mutationKey: ["Login"],
    mutationFn: (data) => {
      console.log("Login.js Post Data =", data);
      return Login(data);
    },
  });
};
