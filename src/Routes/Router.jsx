import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Homepage/Home";
import Coverages from "../Pages/Coverage/Coverages";
import AuthLayout from "../Layouts/AuthLayout";


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
        
      },
      {
        path:'register',
      }
    ]
  }
]);

export default router