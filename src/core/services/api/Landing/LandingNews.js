import { useQuery } from "@tanstack/react-query";
import http from "../../../interceptors/interceptors";
import { ApiRoutes } from "../ApiRoutes/ApiRoutes";

const LandingNews = async () => {
  try {
    const response = await http.get(ApiRoutes.LANDING_NEWS_URL);
    return response.news;
  } catch (error) {
    console.log("This error Four Landing Report.js", error);
    return false;
  }
};
export const useLandingNews = () => {
  return useQuery({
    queryKey: ["LandingNews"],
    queryFn: LandingNews,
  });
};
