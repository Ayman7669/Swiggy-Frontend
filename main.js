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
import RestaurantMenu from "./src/component/RestaurantMenu";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      
      {
        path: "/", 
        element: <Home />,
      },
      {
        path: "/restaurant", 
        element: <Body />, 
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
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />,
);
