import { useQuery } from "@tanstack/react-query";
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
