// import "./App.css";

import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../screens/Landing/Landing";
import { Layout } from "../layout/Layout";
import {  CoursesPage } from "../screens/CoursesPage/CoursesPage";


const App = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children: [
      { path: "/", element: <Landing/> },
      { path: "/Courses", element: <CoursesPage/>},
      { path: "/News", element: <p> این صفحه اخباره هاست</p>},
    ]
    
  },
  { path: "*", element: <p>این صفحه ارور 404 هست</p> },
])

export  {App};
