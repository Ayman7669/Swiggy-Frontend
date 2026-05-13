import react from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import Footer from "./src/component/Footer";
import AppLayout from "./src/Applayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./src/component/Error";
import Contact from "./src/component/Contact";
import Cart from "./src/component/Cards";
import About from "./src/component/About";
import Home from "./src/component/Home";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // 1. AppLayout MUST be here because it has the <Outlet />
    errorElement: <Error />,
    children: [
      // 2. MUST be lowercase 'c'
      {
        path: "/", // Default home (localhost:1234)
        element: <Home />,
      },
      {
        path: "/restaurant", // This will render at localhost:1234/restaurant
        element: <Body />, // Or a specific Restaurant component
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />,
);
