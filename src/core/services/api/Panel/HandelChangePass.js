import { useMutation, useQuery } from "@tanstack/react-query";
import http from "../../../interceptors/interceptors";
import { ApiRoutes } from "../ApiRoutes/ApiRoutes";

const PanelChangePassword = async (user) => {
  console.log("this is PanelChangePassword", user);
  try {
    const response = await http.post(ApiRoutes.PANEL_CHANGE_PASSWORD_URL, user);
    console.log(response.message, "this response PanelChangePassword");
    return response;
  } catch (error) {
    return false;
  }
};

export const usePanelChangePassword = () => {
  return useMutation({
    mutationKey: ["PanelChangePassword"],
    mutationFn: (data) => {
      console.log("this is user PanelChangePassword data =", data);
      return PanelChangePassword(data);
    },
  });
};

//get sec

const GetMySec = async () => {
  try {
    const response = await http.get(`${ApiRoutes.PANEL_GET_SECURITY_URL}`);
    return response;
  } catch (error) {
    console.log("This error For GetMySec", error);
    return false;
  }
};
export const useGetMySec = () => {
  return useQuery({
    queryKey: ["GetMySec"],
    queryFn: GetMySec,
  });
};

//update sec

const PanelUpdateSec = async (user) => {
  console.log("this is PanelUpdateSec", user);
  try {
    const response = await http.put(ApiRoutes.PANEL_UPDATE_SECURITY_URL, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.message, "this response PanelUpdateSec");
    return response;
  } catch (error) {
    return false;
  }
};

export const usePanelUpdateSec = () => {
  return useMutation({
    mutationKey: ["PanelUpdateSec"],
    mutationFn: (data) => {
      console.log("this is user PanelUpdateSec data =", data);
      return PanelUpdateSec(data);
    },
  });
};
