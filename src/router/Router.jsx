import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Registar from "../registar/Registar";
import Login from "../component/login/Login";
import Home from "./pages/home/Home";
import AddCraft from "./pages/home/addCraftAndItems/AddCraft";
import PrivateRouteer from "../privateRouter/PrivateRouteer";
import MyCrafts from "./pages/MyCrafts/MyCrafts";
import AllCrafts from "./pages/allCrafts/AllCrafts";
import Details from "./pages/viewDetails/Details";
import UpdateItem from "./pages/updateItem/UpdateItem";

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
 
},

{

  
    path:'/details/:id',
    element:  <PrivateRouteer> <Details></Details> </PrivateRouteer> ,
    loader:({params})=> fetch(`http://localhost:5000/details/${params.id}`)
    
},

{
path:'/update/:id',
element:<PrivateRouteer>
    <UpdateItem></UpdateItem>
</PrivateRouteer>,
  loader:({params})=> fetch(`http://localhost:5000/update/${params.id}`)

}


        ]

    }


])


export default router;