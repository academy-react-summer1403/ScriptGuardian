import { useMutation } from "@tanstack/react-query";
import http from "../../../interceptors/interceptors";
import { ApiRoutes } from "../ApiRoutes/ApiRoutes";

const EditProfile = async (user) => {
  console.log("this is editProfile", user);
  try {
    const response = await http.put(ApiRoutes.PANEL_EDIT_PROFILE_URL, user);
    console.log(response.message, "this EditProfile success");
    return response;
  } catch (error) {
    console.log(error, "this error editprofile");
    console.log(error.message, "this error editprofile message");

    return false;
  }
};

export const useEditProfile = () => {
  return useMutation({
    mutationKey: ["EditProfile"],
    mutationFn: (data) => {
      console.log("this is user EditProfile =", data);
      return EditProfile(data);
    },
  });
};
