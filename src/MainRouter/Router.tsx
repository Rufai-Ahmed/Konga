import { createBrowserRouter } from "react-router-dom";
import Layout from "../Block/Layout";
import HomeScreen from "../Pages/HomeScreen";
import { Details } from "../Pages/Details";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/id/:id",
    element: <Details />,
  },
]);
