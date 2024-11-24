import { useQuery } from "@tanstack/react-query";
import http from "../../../interceptors/interceptors";
import { ApiRoutes } from "../ApiRoutes/ApiRoutes";

const Courses = async ({
  SearchQuery,
  CostDown,
  CostUp,
  RowsOfPage,
  PageNumber,
  ListTech,
  TeacherId,
}) => {
  const AllParams = {
    Query: SearchQuery ? SearchQuery : undefined,
    CostDown: CostDown ? CostDown : "0",
    CostUp: CostUp ? CostUp : undefined,
    RowsOfPage: RowsOfPage ? RowsOfPage : 6,
    PageNumber: PageNumber ? PageNumber : 1,
    ...(ListTech?.length > 0 && { ListTech: ListTech.join(",") }),
    TechCount: ListTech?.length || 0,
    TeacherId: TeacherId ? TeacherId : undefined,
  };
  try {
    const response = await http.get(ApiRoutes.COURSES_PAGE_URL, {
      params: AllParams,
    });
    return response;
  } catch (error) {
    console.log("This error Four Get All Courses Courses.js", error);
    return false;
  }
};

//Custom Hook
export const useCourses = ({
  SearchQuery,
  CostDown,
  CostUp,
  RowsOfPage,
  PageNumber,
  ListTech,
  TeacherId,
}) => {
  return useQuery({
    queryKey: [
      "Courses",
      SearchQuery,
      CostDown,
      CostUp,
      RowsOfPage,
      PageNumber,
      ListTech,
      TeacherId,
    ],
    queryFn: () =>
      Courses({
        SearchQuery,
        CostDown,
        CostUp,
        RowsOfPage,
        PageNumber,
        ListTech,
        TeacherId,
      }),
  });
};
