
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const Footer = () => {
    return (
        <div className=" bg-[#3B2E2EFC] pb-4 "  >
           <div   className="w-[94%]   md:w-[90%] max-w-[1620px] mx-auto">





           <footer className=" py-10 text-white gap-8 font-workSense md:flex items-center ">
  
  <aside  className="">
  <h4  className="text-3xl font-bold font-poppins mt-4" >StarCraft </h4>




<div  className="flex mt-4 mb-4" >
<p   className="bg-white w-10 h-1" ></p>
<p  className="bg-[#d5be46] w-10 h-1   " ></p>

</div>
<p  className="text-lg text-white font-workSense w-[90%] ">
StarCraft Creations showcases a diverse range of handcrafted wooden and jute creations, with regularly updated product offerings and industry insights to guide your purchasing decisions. Our star-tier WordPress theme is specifically designed for artisan crafts, seamlessly blending rustic charm with modern sophistication.</p>



<div  className="mt-4" >
<p  className="text-[#d5be46] mt-4 font-bold text-lg font-playFair" >Contact us</p>

<div  className="flex mt-4 mb-4" >
<p   className="bg-white w-10 h-1" ></p>
<p  className="bg-[#d5be46] w-10 h-1   " ></p>

</div>


    <p   className="flex gap-2 items-center text-lg">  <FaPhone  className="text-[#d5be46]"></FaPhone> 01608888888 </p>
    <p   className="flex gap-2 items-center text-lg">  <FaWhatsapp  className="text-[#d5be46]"></FaWhatsapp> 01900000000 </p>
    <p   className="flex gap-2 mt-2 items-center text-lg">  <CiMail  className="text-[#d5be46]"></CiMail> stsupport76769@gmail.com </p>
    <p   className="flex gap-2 mt-2 items-center text-lg">  <CiMail  className="text-[#d5be46]"></CiMail> bannah76769@gmail.com </p>
</div>



</aside> 











<form className="ml-auto mt-16 md:mt-0        w-[100%]  mx-auto">
<h6 className="btn btn-ghost text-2xl font-bold font-playFair">StarCraft</h6> 
<fieldset className="form-control w-80">
<label className="label">
<span className="">Subscribe to our Newsletter</span>
</label> 
<div className="join">
<input type="text" placeholder="username@site.com" className="input input-bordered join-item w-48 sm:w-auto" /> 
<button className="btn bg-[#847B4F]  border-none join-item">Subscribe</button>

</div>
</fieldset>




</form>







</footer>

<div  className="text-white font-poppins grid grid-cols-3 items-center gap-4">


<div className="left-row">


<p className="bg-[#8D8080] w-[100%] h-1" ></p>
    
</div>


<div className="icon  mx-auto">



<div className="flex gap-4" >

  <a href="#">  <FaFacebook></FaFacebook></a>
<a href="#">    <FaTwitter></FaTwitter></a>
<a href="#">    <FaInstagram></FaInstagram></a>
  <a href="#">  <FaLinkedin  className="hidden sm:flex"></FaLinkedin></a>
</div>

</div>


<div className="right-row">
<p className="bg-[#8D8080] w-[100%] h-1 " >

  
</p>

</div>


</div>


           </div>
           <footer className="footer footer-center p-4 mt-4 text-white">
  <aside> 
 
    <p>Copyright © 2024 - All right reserved by StarCraft Depoloper team</p>

  </aside>
</footer>

        </div>
    );
};

export default Footer;