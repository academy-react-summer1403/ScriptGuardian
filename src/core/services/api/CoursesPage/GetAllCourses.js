import { useQuery } from "@tanstack/react-query";
import http from "../../../interceptors/interceptors";
import { ApiRoutes } from "../ApiRoutes/ApiRoutes";

// const Courses = async () => {
//   try {
//     const response = await http.get(`${ApiRoutes.COURSES_PAGE_URL}`);
//     return response.courseFilterDtos;
//   } catch (error) {
//     console.log("This error Four Get All Courses Courses.js", error);
//     return false;
//   }
// };
// export const useCourses = () => {
//   return useQuery({
//     queryKey: ["Courses"],
//     queryFn: Courses,
//   });
// };

const Courses = async ({
  SearchQuery,
  CostDown,
  CostUp,
  RowsOfPage,
  PageNumber,
  ListTech,
  TechCount,
}) => {
  const AllParams = {
    Query: SearchQuery ? SearchQuery : undefined,
    CostDown: CostDown ? CostDown : "0",
    CostUp: CostUp ? CostUp : undefined,
    RowsOfPage: RowsOfPage ? RowsOfPage : 6,
    PageNumber: PageNumber ? PageNumber : 1,
    ListTech: ListTech ? ListTech : undefined,
    TechCount: ListTech?.length ? ListTech?.length : undefined,
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
    ],
    queryFn: () =>
      Courses({
        SearchQuery,
        CostDown,
        CostUp,
        RowsOfPage,
        PageNumber,
        ListTech,
      }),
  });
};
