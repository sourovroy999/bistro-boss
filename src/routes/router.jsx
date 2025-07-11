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
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import OnlyAdminRoute from "./OnlyAdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";



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
      //normal user route
      {
        path:'userHome',
        element:<UserHome/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'payment',
        element:<Payment/>
      },
      {
          path:'paymentHistory',
          element:<PaymentHistory/>
      },
     
      

      //admin only routes
      {
        path:'adminHome',
        element:<OnlyAdminRoute>
          <AdminHome/>
        </OnlyAdminRoute>

      },
      {
        path:'addItems',
       
        element:<OnlyAdminRoute>
          <AddItems/>
        </OnlyAdminRoute>

      },
      {
        path:'users',
        element:<OnlyAdminRoute>
          <AllUsers/>
        </OnlyAdminRoute>
      },
      {
        path:'manageItems',
        element:<OnlyAdminRoute>
          <ManageItems/>
        </OnlyAdminRoute>
      },
      {
        path:'updateItem/:id',
        element:<OnlyAdminRoute>
          <UpdateItem/>
        </OnlyAdminRoute>,
        loader:({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
      }
    ]
  }
]);

