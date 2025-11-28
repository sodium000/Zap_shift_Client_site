import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Homepage/Home";
import Coverages from "../Pages/Coverage/Coverages";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Regiester from "../Pages/Auth/Regiester/Regiester";


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
  }
]);

export default router