import { Outlet } from "react-router-dom";

import Footer from "../component/footer/Footer";


const Root = () => {
    return (
        <div >
          <div >
          {/* <Navbar></Navbar> */}
  
            <Outlet></Outlet>

          </div>
          <Footer></Footer>
        </div>
    );
};

export default Root;