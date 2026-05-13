import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import Footer from "./src/component/Footer";
import AppLayout from "./src/Applayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./src/component/Error";
import About from "./src/component/About";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: "welcome to Swiggy",
    errorElement: <Error />,
  },
  {
    path: "/restaurant",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />,
);
