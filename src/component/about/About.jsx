import img from '../../assets/about.png'
import { GiWoodenSign } from "react-icons/gi";
import { GiDeadWood } from "react-icons/gi";
import { TbFreezeRow } from "react-icons/tb";
import { FcCustomerSupport } from "react-icons/fc";
import { Fade, Slide, Zoom } from 'react-awesome-reveal';




const About = () => {
    return (
        <div className="mt-16 w-[96%] md:w-[90%] mx-auto ">
             <div  className="text-center">
           
            <Slide  duration={2000}  >

            <h1 className="font-raleway text-3xl font-bold"> About Us </h1>
</Slide>

<Zoom duration={2000} delay={500}>
<p  className="font-work-sense text-">Bringing nature’s charm indoors with handcrafted jute and wooden treasures for modern living.</p>
</Zoom>
       
            </div>

            <div className="mt-16 flex-col-reverse md:flex-row  flex gap-16  items-center" >


<img src={img} className=' w-[50%]' alt="" />
<div className='flex-1 text-center md:text-left'>

<Fade  duration={2000}>
<h1  className='text-3xl font-bold font-raleway text-[#847B4F]'>Why Choose Us</h1>
</Fade>
<Zoom duration={2000}>

<p  className='text-lg font-work-sense my-8'>We have 25 years of woodcraft experience right</p>

<p className='text-gray-600 font-work-sense'>to your residential, office, restaurants hospital. Our designing team designs with your taste, space, and budget, Also our team will guide you to choose. We provide high quality products only to our customers, our prodcuts are certified with WI organization usa.</p>

<div className='flex justify-between mt-10'>
<p className='font-2xl font-bold font-raleway flex gap-2 items-center'> <GiWoodenSign className='' />
 Creative Designers</p>
<p className='font-2xl font-bold font-raleway  flex gap-2 items-center' > <GiDeadWood /> Quality Products</p>

</div>
<div className='flex justify-between mt-10'>
<p className='font-2xl font-bold font-raleway flex gap-2 items-center'> <TbFreezeRow  className='' />
Free Consultation</p>
<p className='font-2xl font-bold font-raleway  flex gap-2 items-center' > <FcCustomerSupport /> 24/7 Customer Support</p>


</div>
</Zoom>

            </div>
            </div>

            
        </div>
    );
};

export default About;