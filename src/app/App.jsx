// import "./App.css";

import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../screens/Landing/Landing";
import { Layout } from "../layout/Layout";
import {  CoursesPage } from "../screens/CoursesPage/CoursesPage";
import { NewsPage } from "../screens/NewsPage/NewsPage";


const App = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
      { path: "/", element: <Landing/> },
      { path: "/Courses", element: <CoursesPage/>},
      { path: "/News", element: <NewsPage/>},
    ]
    
  },
  { path: "*", element: <NewsPage/> },
])

export  {App};
