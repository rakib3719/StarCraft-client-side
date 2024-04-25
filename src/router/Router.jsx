import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";

const router = createBrowserRouter([


    {
        path:'/',
        element:<Root></Root>,
        errorElement:<p>404</p>,
        children:[
{
    path:'/h',
    element:<p>this is</p>
}


        ]

    }


])


export default router;