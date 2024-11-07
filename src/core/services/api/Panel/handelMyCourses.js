import { useMutation, useQuery } from "@tanstack/react-query";
import http from "../../../interceptors/interceptors";
import { ApiRoutes } from "../ApiRoutes/ApiRoutes";

const MyCourses = async () => {
  try {
    const response = await http.get(`${ApiRoutes.PANEL_MY_COURSES_URL}`);
    return response.listOfMyCourses;
  } catch (error) {
    console.log("This error For MyCourses.js", error);
    return false;
  }
};
export const useMyCourses = () => {
  return useQuery({
    queryKey: ["MyCourses"],
    queryFn: MyCourses,
  });
};

//handel MyReservedCourses

const MyReservedCourses = async () => {
  try {
    const response = await http.get(
      `${ApiRoutes.PANEL_MY_RESERVED_COURSES_URL}`
    );
    return response;
  } catch (error) {
    console.log("This error For MyReservedCourses", error);
    return false;
  }
};
export const useMyReservedCourses = () => {
  return useQuery({
    queryKey: ["MyReservedCourses"],
    queryFn: MyReservedCourses,
  });
};

///handel Delete

const DeleteMyReservedCourses = async (data) => {
  try {
    const response = await http.delete(
      ApiRoutes.PANEL_DELETE_MY_RESERVED_COURSES_URL,
      {
        data: {
          id: data,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("This error For DeleteMyReservedCourses", error);
    return false;
  }
};
export const useDeleteMyReservedCourses = () => {
  return useMutation({
    mutationKey: ["DeleteMyReservedCourses"],
    mutationFn: (data) => {
      console.log("this is user data =", data);
      return DeleteMyReservedCourses(data);
    },
  });
};
