import {
  createBrowserRouter,

} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
        {
            path:'/',
            element:<Home/>,

        },
        {
          path:'/menu',
          element:<Menu/>
        },
        {
          path:'/order/:category',
          element:<Order/>
        }
    ]
  },
]);

