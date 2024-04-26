import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Registar from "../registar/Registar";
import Login from "../component/login/Login";
import Home from "./pages/home/Home";
import AddCraft from "./pages/home/addCraftAndItems/AddCraft";
import PrivateRouteer from "../privateRouter/PrivateRouteer";
import MyCrafts from "./pages/MyCrafts/MyCrafts";
import AllCrafts from "./pages/allCrafts/AllCrafts";

const router = createBrowserRouter([


    {
        path:'/',
        element:<Root></Root>,
        errorElement:<p>404</p>,
        children:[

{
    path:'/',
    element:<Home></Home>

},

{
   path:'/registar',
   element:<Registar></Registar>
},
{
    path:'/login',
    element:<Login></Login>
},
{
    path:'/add_crafts',
    element: <PrivateRouteer>
        <AddCraft></AddCraft>
    </PrivateRouteer>
},

{
    path:'/my_crafts',
    element:<PrivateRouteer>
         <MyCrafts></MyCrafts>
    </PrivateRouteer>
},
{
    path: '/all_crafts',
    element: <AllCrafts></AllCrafts>
}


        ]

    }


])


export default router;