import { Outlet } from "react-router-dom";

import Footer from "../component/footer/Footer";
import Navbar from "../component/navbar/Navbar";


const Root = () => {
    return (
        <div >
          <div >
          {/* <Navbar></Navbar> */}
  <Navbar></Navbar>
            <Outlet></Outlet>

          </div>
          <Footer></Footer>
        </div>
    );
};

export default Root;