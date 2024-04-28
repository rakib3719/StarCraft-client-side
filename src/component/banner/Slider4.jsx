import bg from '../../assets/banner1.jpg'

const Slider4 = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${bg})`}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className=" text-neutral-content">
    <div className="sm:w-[70%] ml-4 md:ml-8 py-8 sm:ml-16">
      <h1 className="mb-5 text-2xl sm:text-3xl lg:text-5xl font-bold"> Rustic Elegance with Handcrafted Jute Artistry in Mind </h1>
      <p className="mb-5 w-[80%] ">

      Embodying rustic elegance, these handcrafted jute creations reflect an artistry rooted in tradition and inspired by natural beauty and sustainability
      </p>
      <button className="btn text-white border-none bg-[#847B4F]">Check Service</button>
      <button className="btn  text-white bg-transparent ml-4 ">Check Service</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider4;