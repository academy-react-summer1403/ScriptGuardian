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

const PageNews = async ({ SearchQuery, RowsOfPage, PageNumber }) => {
  const AllParams = {
    Query: SearchQuery ? SearchQuery : undefined,
    RowsOfPage: RowsOfPage ? RowsOfPage : 9,
    PageNumber: PageNumber ? PageNumber : 1,
  };
  try {
    const response = await http.get(ApiRoutes.LANDING_NEWS_URL, {
      params: AllParams,
    });
    return response;
  } catch (error) {
    console.log("This error For LandingNews.js", error);
    return false;
  }
};
export const usePageNews = ({ SearchQuery, RowsOfPage, PageNumber }) => {
  return useQuery({
    queryKey: ["LandingNews", SearchQuery, RowsOfPage, PageNumber],
    queryFn: () => PageNews({ SearchQuery, RowsOfPage, PageNumber }),
  });
};
