import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Homepage/Home";
import Coverages from "../Pages/Coverage/Coverages";


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
]);

export default router