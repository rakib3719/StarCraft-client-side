import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Registar from "../registar/Registar";

const router = createBrowserRouter([


    {
        path:'/',
        element:<Root></Root>,
        errorElement:<p>404</p>,
        children:[
{
   path:'/registar',
   element:<Registar></Registar>
}


        ]

    }


])


export default router;