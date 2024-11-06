// import "./App.css";

import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../screens/Landing/Landing";
import { Layout } from "../layout/Layout";
import { CoursesPage } from "../screens/CoursesPage/CoursesPage";
import { NewsPage } from "../screens/NewsPage/NewsPage";
import { Error404 } from "../screens/Error/Error404";
import { DetailsNews } from "../screens/DetailsNews/DetailsNews";
import { CoursesDetails } from "../screens/CoursesDetails/CoursesDetails";
import { StudentLayout } from "../layout/StudentLayout";
import { DashBoard } from "../screens/StudentPanel/DashBoard/DashBoard";
import { StudentProfile } from "../screens/StudentPanel/Profile/StudentProfile";
import { ChangePassWord } from "../screens/StudentPanel/ChangePassWord/ChangePassWord";
import { MyCourses } from "../screens/StudentPanel/MyCourses/MyCourses";
import { MyReservedCourses } from "../screens/StudentPanel/MyReservedCourses/MyReservedCourses";

const App = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/Courses", element: <CoursesPage /> },
      { path: "/Courses/:id", element: <CoursesDetails /> },
      {
        path: "/News",
        element: <NewsPage />,
      },
      { path: "/News/:id", element: <DetailsNews /> },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/panel",
    element: <StudentLayout />,
    children: [
      { path: "/panel", element: <DashBoard /> },
      { path: "/panel/MyProfile", element: <StudentProfile /> },
      { path: "/panel/MyCourses", element: <MyCourses /> },
      { path: "/panel/MyReservedCourses", element: <MyReservedCourses /> },
      { path: "/panel/ChangePassword", element: <ChangePassWord /> },
      // {path:"/panel/Logout", element:<p>خروج</p>},
      { path: "/panel/MyComments", element: <p>کامنت های من</p> },
    ],
  },
]);

export { App };
