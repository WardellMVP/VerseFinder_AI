import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./components/homePage/home";
import Contact from "./components/contactPage/contact";
import About from "./components/aboutPage/about";
import Pricing from "./components/pricingPage/pricing";
import Navbar from "./navbar/navbar";

const AppLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path:"contact",
        element: <Contact/>,
      },
      {
        path: "pricing",
        element: <Pricing/>,
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
