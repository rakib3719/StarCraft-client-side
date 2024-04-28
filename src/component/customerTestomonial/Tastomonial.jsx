import imgReview from '../../assets/review.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  Autoplay, Pagination, Scrollbar,A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { FaQuoteLeft } from "react-icons/fa";
import customer from '../../assets/customer-1.jpg'
import customer2 from '../../assets/customer2.jpg'
import customer3 from '../../assets/customer3.jpg'
import customer4 from '../../assets/customer4.jpg'
import customer5 from '../../assets/customer5.jpg'
import { Slide, Zoom } from 'react-awesome-reveal';


const Tastomonial = () => {
    return (
        <div    className="w-[96%] pb-16 mt-28 md:w-[90%] mx-w-[1220px] mx-auto">

        <Slide   duration={2000}>

        <h1  className='text-center  mt-12 text-3xl  font-bold font-raleway'> Tastomonial </h1>
        </Slide>

        <Zoom duration={2000} delay={500}>
<p  className="font-work-sense text-center w-[70%] mx-auto mt-4 mb-16"> Engaging with StarCraft's offerings, customers share glowing reviews of their exceptional experiences, a testament to superior craftsmanship and service. </p>
</Zoom>
       
          <div   className='md:flex gap-8 items-center'>
            
            <div  className='md:w-1/2'>
<img src={imgReview} className='w-full' alt="" />

            </div>
            <div  className='md:w-1/2 p-4  md:p-8 bg-[#585b4a]  z-0 rounded-md'>
         
<h1  className='text-2xl font-raleway font-bold text-center '>What Client Says</h1>

<FaQuoteLeft className='w-full text-center text-3xl mt-8' />
            <Swiper 
   modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
spaceBetween={50}
slidesPerView={1}
navigation

   
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}

className='z-0 '
speed={1500}
autoplay={{
    delay: 2000,
  
    disableOnInteraction: false,
  }}
   

>
<SwiperSlide   > 
    <div  className='bg-white rounded-2xl mt-8 lg:rounded-tl-[60px] lg:rounded-br-[60px]'>

        <p  className=' md:w-[80%] mx-auto p-4 md:p-8 '>"StarCraft's wooden furniture blends functionality with artistry, while their eco-friendly jute kitchenware brings warmth to every meal. Highly recommended for their artisanal touch!"</p>

      <div  className='flex flex-col items-center mt-2 pb-8'>
      <img src={customer} alt="" className='w-[80px] rounded-full h-[80px]' />
<h1  className='font-raleway font-bold'>MR. Saifuddin Hamid</h1>

<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
      </div>
    </div>
    
    
     </SwiperSlide>


     <SwiperSlide   > 
    <div  className='bg-white rounded-2xl mt-8 lg:rounded-tl-[60px] lg:rounded-br-[60px]'>

        <p  className='w-[80%] mx-auto p-8 '>"StarCraft offers a range of exquisite wooden sculptures and eco-friendly jute decor, making our home uniquely inviting. Their attention to detail sets them apart!"</p>

      <div  className='flex flex-col items-center mt-2 pb-8'>
      <img src={customer2} alt="" className='w-[80px] rounded-full h-[80px]' />
<h1  className='font-raleway font-bold'> Sufia Kaif </h1>

<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
      </div>
    </div>
    
    
     </SwiperSlide>

     <SwiperSlide   > 
    <div  className='bg-white rounded-2xl mt-8 lg:rounded-tl-[60px] lg:rounded-br-[60px]'>

        <p  className='w-[80%] mx-auto p-8 '>StarCraft's wooden utensils and kitchenware combine practicality with natural beauty, enhancing every culinary experience. Exceptional quality and craftsmanship, highly recommended!"</p>

      <div  className='flex flex-col items-center mt-2 pb-8'>
      <img src={customer3} alt="" className='w-[80px] rounded-full h-[80px]' />
<h1  className='font-raleway font-bold'>Tahmina Mohiuddin</h1>

<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
</div>
      </div>
    </div>
    
    
     </SwiperSlide>
     <SwiperSlide   > 
    <div  className='bg-white rounded-2xl mt-8 lg:rounded-tl-[60px] lg:rounded-br-[60px]'>

        <p  className='w-[80%] mx-auto p-8 '>"Transform your space with StarCraft's cozy jute home decor, adding rustic charm sustainably. Their pieces have made our home a haven of style and eco-consciousness."</p>

      <div  className='flex flex-col items-center mt-2 pb-8'>
      <img src={customer4} alt="" className='w-[80px] rounded-full h-[80px]' />
<h1  className='font-raleway font-bold'>Tahmina Mohiuddin</h1>

<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
</div>
      </div>
    </div>
    
    
     </SwiperSlide>
     <SwiperSlide   > 
    <div className='bg-white rounded-2xl mt-8 lg:rounded-tl-[60px] lg:rounded-br-[60px]'>

        <p  className='w-[80%] mx-auto p-8 '>"Discover elegance and eco-friendliness at StarCraft with their stunning wooden and jute jewelry. Each piece is a work of art, perfect for elevating any outfit. A must-visit!"</p>

      <div  className='flex flex-col items-center mt-2 pb-8'>
      <img src={customer5} alt="" className='w-[80px] rounded-full h-[80px]' />
<h1  className='font-raleway font-bold'>Tahmina Mohiuddin</h1>

<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
      </div>
    </div>
    
    
     </SwiperSlide>

</Swiper>

            </div>
            
            </div>  
        </div>
    );
};

export default Tastomonial;