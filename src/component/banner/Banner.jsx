// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,  Autoplay, Pagination, Scrollbar,A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y'; // Add CSS import for A11y module

import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';
import Slider4 from './Slider4';



const Banner = () => {
    return (
        <div>
<Swiper 
   modules={[Navigation,Autoplay, Pagination, Scrollbar, A11y]}
spaceBetween={50}
slidesPerView={1}
navigation

   
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}


speed={1500}
autoplay={{
    delay: 2000,
  
    disableOnInteraction: false,
  }}
   

>
<SwiperSlide   ><Slider1></Slider1> </SwiperSlide>
<SwiperSlide> <Slider2></Slider2> </SwiperSlide>
<SwiperSlide > <Slider3></Slider3> </SwiperSlide>
<SwiperSlide>  <Slider4></Slider4></SwiperSlide>

</Swiper>
        </div>
    );
};

export default Banner;