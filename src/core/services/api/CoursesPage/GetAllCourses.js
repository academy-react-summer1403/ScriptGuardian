import { useQuery } from "@tanstack/react-query";
import http from "../../../interceptors/interceptors";
import { ApiRoutes } from "../ApiRoutes/ApiRoutes";

const Courses = async () => {
  try {
    const response = await http.get(`${ApiRoutes.COURSES_PAGE}`);
    return response.courseFilterDtos;
  } catch (error) {
    console.log("This error Four Get All Courses Courses.js", error);
    return false;
  }
};
export const useCourses = () => {
  return useQuery({
    queryKey: ["Courses"],
    queryFn: Courses,
  });
};
