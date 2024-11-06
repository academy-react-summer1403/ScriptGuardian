import { useMutation } from "@tanstack/react-query";
import http from "../../../interceptors/interceptors";
import { ApiRoutes } from "../ApiRoutes/ApiRoutes";

//handel like

const AddReserveCourse = async (newsId) => {
  console.log("this is AddReserveCourse ", newsId);
  try {
    const response = await http.post(
      `${ApiRoutes.DETAILS_COURSES_ADD_TO_RESERVE_URL}${newsId}`
    );
    console.log(response.message, "this response Of  AddReserveCourse");
    return response;
  } catch (error) {
    return false;
  }
};

export const useAddReserveCourse = () => {
  return useMutation({
    mutationKey: ["AddReserveCourse"],
    mutationFn: (newsId) => {
      console.log("this is AddReserveCourse =", newsId);
      return AddReserveCourse(newsId);
    },
  });
};
