import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Registar from "../registar/Registar";
import Login from "../component/login/Login";

const router = createBrowserRouter([


    {
        path:'/',
        element:<Root></Root>,
        errorElement:<p>404</p>,
        children:[
{
   path:'/registar',
   element:<Registar></Registar>
},
{
    path:'/login',
    element:<Login></Login>
}


        ]

    }


])


export default router;