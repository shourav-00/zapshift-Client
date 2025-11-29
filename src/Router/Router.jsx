import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import { Component } from "react";
import HomePage from "../Pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);
