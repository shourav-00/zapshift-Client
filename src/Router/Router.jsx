import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import { Component } from "react";
import HomePage from "../Pages/HomePage";
import Service from "../Pages/Service";
import Coverage from "../Pages/Coverage";
import AboutUs from "../Pages/AboutUs";
import Pricing from "../Pages/Pricing";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path:'/services',
        Component:Service,
      },
      {
        path:'/coverage',
        Component:Coverage,
      },
      {
        path:'/AboutUs',
        Component:AboutUs,
      },
      {
        path:'/pricing',
        Component:Pricing,
      },
      {
        path:'/blog',
        Component:Blog,
      },
       {
        path:'/contact',
        Component:Contact,
      },
    ],
  },
]);
