import About from "../../../component/about/About";
import Banner from "../../../component/banner/Banner";
import Craft from "../../../component/craft/Craft";

const Home = () => {
    return (
        <div className=" mx-auto mx-w-[1220px]">
      <Banner></Banner>
      <Craft></Craft>
      <About></About>
      
        </div>
    );
};

export default Home;