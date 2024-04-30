import  { useEffect, useState } from "react";
import About from "../../../component/about/About";
import Banner from "../../../component/banner/Banner";
import Catagory from "../../../component/catagory/Catagory";
import Craft from "../../../component/craft/Craft";
import DarkModeToggle from "react-dark-mode-toggle";
import Tastomonial from "../../../component/customerTestomonial/Tastomonial";

const Home = () => {
  const storedTheme = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(storedTheme === "synthwave");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", storedTheme);
  }, [storedTheme]);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "synthwave";
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  return (
    <div>
      <div className="w-[93%] lg:w-[94%] max-w-[1620px] -mt-2 mx-auto">
        <DarkModeToggle
          onChange={toggleDarkMode}
          checked={isDarkMode}
          size={60}
        />
      </div>

      <Banner />
      <Craft />
      <Catagory />
      <About />
      <Tastomonial />
    </div>
  );
};

export default Home;