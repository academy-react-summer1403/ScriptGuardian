import { useMutation, useQuery } from "@tanstack/react-query";
import http from "../../../interceptors/interceptors";
import { ApiRoutes } from "../ApiRoutes/ApiRoutes";

//handel like

const AddLikeCommentNews = async ({ commentId, LikeType }) => {
  console.log("this is Post Like ", commentId);
  try {
    const response = await http.post(
      `${ApiRoutes.DETAILS_NEWS_PAGE_LIKE_COMMENT_URL}${commentId}?LikeType=${LikeType}`
    );
    console.log(response.message, "this response Of AddLikeCommentNews");
    return response;
  } catch (error) {
    return false;
  }
};

export const useAddLikeCommentNews = () => {
  return useMutation({
    mutationKey: ["AddLikeCommentNews"],
    mutationFn: (data) => {
      console.log("this is AddLikeCommentNews =", data);
      return AddLikeCommentNews(data);
    },
  });
};

///handel Replay

const ReplayCommentNews = async (id) => {
  try {
    const response = await http.get(
      `${ApiRoutes.DETAILS_NEWS_PAGE_REPLAY_COMMENT_URL}Id=${id}`
    );
    return response;
  } catch (error) {
    console.log("This error For ReplayCommentNews  ", error);
    return false;
  }
};
export const useReplayCommentNews = (id) => {
  return useQuery({
    queryKey: ["ReplayCommentNews", id],
    queryFn: () => ReplayCommentNews(id),
    enabled: !!id, // اجرای query فقط زمانی که id موجود باشد
  });
};
