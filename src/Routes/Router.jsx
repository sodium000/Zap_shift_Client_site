import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Homepage/Home";
import Coverages from "../Pages/Coverage/Coverages";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Regiester from "../Pages/Auth/Regiester/Regiester";
import Rider from "../Pages/beARider/Rider";
import PrivateRoutes from './PrivateRoutes'
import Sendparcel from "../Pages/SendParcel/Sendparcel";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels";


const router = createBrowserRouter([
  {
    path: "/",
    Component : RootLayout,
    children: [
        {
            index : true,
            Component : Home
        },
        {
            path : '/rider',
            element : <PrivateRoutes><Rider></Rider></PrivateRoutes>
        },
        {
            path : '/send-parcel',
            element : <PrivateRoutes><Sendparcel></Sendparcel></PrivateRoutes>,
            loader : ()=> fetch('/warehouses.json').then(res=>res.json())
        },
        {
            path: 'coverage',
            Component : Coverages,
            loader : ()=> fetch('/warehouses.json').then(res=>res.json())
        }
    ]
  },
  {
    path : '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component:Login
        
      },
      {
        path:'regiester',
        Component:Regiester
      }
    ]
  },
    {
    path: 'dashboard',
    element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children: [
      {
        path: 'my-parcels', 
        Component: MyParcels
      }
    ]
  }
]);

export default router