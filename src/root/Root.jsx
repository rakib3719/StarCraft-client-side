import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/Navbar";


const Root = () => {
    return (
        <div >
          <div className=" w-[96%] md:w-[90%] mx-w-[1220px] mx-auto">
          <Navbar></Navbar>
           <p  className="font-raleway">this is root</p>
            <Outlet></Outlet>
          </div>
        </div>
    );
};

export default Root;