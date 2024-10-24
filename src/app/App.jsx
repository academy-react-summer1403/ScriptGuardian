// import "./App.css";

import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../screens/Landing/Landing";
import { Layout } from "../layout/Layout";
import { CoursesPage } from "../screens/CoursesPage/CoursesPage";
import { NewsPage } from "../screens/NewsPage/NewsPage";
import { Error404 } from "../screens/Error/Error404";
import { DetailsNews } from "../screens/DetailsNews/DetailsNews";

const App = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/Courses", element: <CoursesPage /> },
      {
        path: "/News",
        element: <NewsPage />,
      },
      { path: "/News/:id", element: <DetailsNews/>},
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export { App };
