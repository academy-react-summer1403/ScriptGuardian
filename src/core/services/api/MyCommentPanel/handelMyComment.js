import { useMutation, useQuery } from "@tanstack/react-query";
import http from "../../../interceptors/interceptors";
import { ApiRoutes } from "../ApiRoutes/ApiRoutes";

const MyCommentInCourses = async () => {
  try {
    const response = await http.get(
      `${ApiRoutes.PANEL_MY_COMMENT_IN_COURSES_URL}`
    );
    return response.myCommentsDtos;
  } catch (error) {
    console.log("This error For MyCommentInCourses", error);
    return false;
  }
};
export const useMyCommentInCourses = () => {
  return useQuery({
    queryKey: ["MyCommentInCourses"],
    queryFn: MyCommentInCourses,
  });
};

const DeleteMyCommentInCourses = async (data) => {
  //   try {
  //     const response = await http.delete(
  //       ApiRoutes.PANEL_DELETE_MY_COMMENT_IN_COURSES_URL,
  //       {
  //         data: {
  //           id: data,
  //         },
  //       }
  //     );
  //     return response;
  //   } catch (error) {
  //     console.log("This error For DeleteMyCommentInCourses", error);
  //     return false;
  //   }

  try {
    const response = await http.delete(
      `${ApiRoutes.PANEL_DELETE_MY_COMMENT_IN_COURSES_URL}CourseCommandId=${data}`
    );
    return response;
  } catch (error) {
    console.log("This error For DeleteMyCommentInCourses", error);
    return false;
  }
};
export const useDeleteMyCommentInCourses = () => {
  return useMutation({
    mutationKey: ["DeleteMyCommentInCourses"],
    mutationFn: (data) => {
      console.log("this is user data =", data);
      return DeleteMyCommentInCourses(data);
    },
  });
};

//Comment News
const MyCommentInNews = async () => {
  try {
    const response = await http.get(
      `${ApiRoutes.PANEL_MY_COMMENT_IN_NEWS_URL}`
    );
    return response.myNewsCommetDtos;
  } catch (error) {
    console.log("This error For MyCommentInNews", error);
    return false;
  }
};
export const useMyCommentInNews = () => {
  return useQuery({
    queryKey: ["MyCommentInNews"],
    queryFn: MyCommentInNews,
  });
};
