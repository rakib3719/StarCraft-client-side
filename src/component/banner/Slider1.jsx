import bg from '../../assets/banner4.jpg'


const Slider1 = () => {
    return (
        <div>
            <div className="hero h-[600px]" style={{backgroundImage: `url(${bg})`}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className=" text-neutral-content">
    <div className="sm:w-[70%] ml-4 md:ml-8  py-8 sm:ml-16">
      <h1 className="mb-5 text-2xl sm:text-3xl lg:text-5xl font-bold"> Quality Jute & wooden Crafts Products For Your Demand </h1>
      <p className="mb-5 w-[80%] ">

        From 1999 we have work tirelessly to earan our repotation quality and dependavility in all Jute & wooden Crafts Products we offer
      </p>
      <button className="btn text-white border-none bg-[#847B4F]">Check Service</button>
      <button className="btn  text-white bg-transparent ml-4 ">Check Service</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider1;