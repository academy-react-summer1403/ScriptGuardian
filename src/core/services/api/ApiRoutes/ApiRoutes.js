export const LOGIN_URL = "/sign/login";
export const SIGN_SEND_VERIFY_MESSAGE_URL = "/Sign/SendVerifyMessage";
export const LandingReport = "/Home/LandingReport";
export const ApiRoutes = {
  //Auth
  LOGIN_URL: "/sign/login",
  REGISTER_CODE_URL: "/Sign/SendVerifyMessage",
  REGISTER_CODE_VERIFICATION_URL: "/Sign/VerifyMessage",
  REGISTER_CODE_FINISH: "/Sign/Register",

  //Landing
  LANDING_REPORT_URL: "/Home/LandingReport",
  LANDING_COURSES_URL: "/Home/GetCoursesTop",
  LANDING_TEACHERS_URL: "/Home/GetTeachers",
  LANDING_NEWS_URL: "/News",

  //Courses Page
  COURSES_PAGE_URL: "/Home/GetCoursesWithPagination",
  ADD_LIKE_COURSES_URL: "/Course/AddCourseLike?CourseId=",
  ADD_DISS_LIKE_COURSES_URL: "/Course/AddCourseDissLike?CourseId=",
  DELETE_LIKE_COURSES_URL: "/Course/DeleteCourseLike",
  ADD_COURSES_FAVORITE_URL: "/Course/AddCourseFavorite",
  DELETE_COURSES_FAVORITE_URL: "/Course/DeleteCourseFavorite",
  //Details Of Courses
  DETAILS_COURSES_PAGE_URL: "/Home/GetCourseDetails?CourseId=",
  //Detail OF News
  DETAILS_NEWS_PAGE_URL: "/News/",
  //StudentPanel
  PANEL_PROFILE_URL: "/SharePanel/GetProfileInfo",
};
