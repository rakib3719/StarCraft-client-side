import About from "../../../component/about/About";
import Banner from "../../../component/banner/Banner";
import Catagory from "../../../component/catagory/Catagory";
import Craft from "../../../component/craft/Craft";

const Home = () => {
    return (
        <div  className=" mx-auto mx-w-[1220px]">
       <input type="checkbox"  className="toggle" checked />
      <Banner></Banner>
      <Craft></Craft>
      <About></About>
      <Catagory></Catagory>
      
        </div>
    );
};

export default Home;