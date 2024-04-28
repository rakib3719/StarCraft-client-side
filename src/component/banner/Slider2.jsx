import bg from '../../assets/banner6.jpg'

const Slider2 = () => {
    return (
        <div>
             <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${bg})`}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className=" text-neutral-content">
    <div className="sm:w-[70%] py-12 ml-4 md:ml-8  sm:ml-16">
      <h1 className="mb-5 text-2xl sm:text-3xl lg:text-5xl font-bold">  Artisan Wooden Masterpieces Echo a Tradition of Timeless EleganceElegance </h1>
      <p className="mb-5 w-[80%] ">

      Emphasize the classic craftsmanship and artistry of your wooden creations, targeting customers who value traditional woodworking techniques.
      </p>
      <button className="btn text-white border-none bg-[#847B4F]">Check Service</button>
      <button className="btn  text-white bg-transparent ml-4 ">Check Service</button>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default Slider2;