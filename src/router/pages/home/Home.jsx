import { useState } from "react";
import About from "../../../component/about/About";
import Banner from "../../../component/banner/Banner";
import Catagory from "../../../component/catagory/Catagory";
import Craft from "../../../component/craft/Craft";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Navbar from "../../../component/navbar/Navbar";


const Home = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  console.log(import.meta.env.VITE_PASS);
    return (
      
        <div data-theme = { isDarkMode && 'dark' }
        >

          <Navbar></Navbar>
 <div  className="  w-[96%] mx-w-[1220px] md:mt-2 left-8 md:top-20  md:absolute lg:top-28 z-10 md:w-[90%] mx-auto  ">
 <DarkModeSwitch
      style={{ 
 
        padding:'6px'
   }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={40}

    className="md:bg-gray-300 rounded-md"
    />
 </div>
<div  className=" mx-auto mx-w-[1220px]">
  
  <Banner></Banner>
  <Craft></Craft>
  <About></About>
  <Catagory></Catagory>

  
  
    </div>

    {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;