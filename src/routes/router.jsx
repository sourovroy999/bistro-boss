import {
  createBrowserRouter,

} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Pages/Shared/secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

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
        },{
          path:'/login',
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/secret',
          element:<PrivateRoute>
            <Secret/>
          </PrivateRoute>
        }
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute>
      <Dashboard/>
    </PrivateRoute>,
    children:[
      {
        path:'cart',
        element:<Cart/>
      },

      //admin routes
      {
        path:'users',
        element:<AllUsers/>
      }
    ]
  }
]);

