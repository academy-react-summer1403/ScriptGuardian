import { useQuery } from "@tanstack/react-query";
import http from "../../../interceptors/interceptors";
import { ApiRoutes } from "../ApiRoutes/ApiRoutes";

const Technologies = async () => {
  try {
    const response = await http.get(
      `${ApiRoutes.GET_LIST_OF_TECHNOLOGIES_URL}`
    );
    return response;
  } catch (error) {
    console.log("This error For Technologies", error);
    return false;
  }
};
export const useTechnologies = () => {
  return useQuery({
    queryKey: ["Technologies"],
    queryFn: () => Technologies(),
  });
};

const CourseTypes = async () => {
  try {
    const response = await http.get(`${ApiRoutes.GET_LIST_OF_COURSE_TYPE_URL}`);
    return response;
  } catch (error) {
    console.log("This error For CourseTypes", error);
    return false;
  }
};
export const useCourseTypes = () => {
  return useQuery({
    queryKey: ["CourseTypes"],
    queryFn: () => CourseTypes(),
  });
};

const CourseLevels = async () => {
  try {
    const response = await http.get(
      `${ApiRoutes.GET_LIST_OF_COURSE_LEVEL_URL}`
    );
    return response;
  } catch (error) {
    console.log("This error For CourseLevels", error);
    return false;
  }
};
export const useCourseLevels = () => {
  return useQuery({
    queryKey: ["CourseLevels"],
    queryFn: () => CourseLevels(),
  });
};
