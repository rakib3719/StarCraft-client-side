import { useEffect, useState } from "react";
import CatagoryCard from "./CatagoryCard";
import {  Slide, Zoom } from "react-awesome-reveal";


const Catagory = () => {

const [catagoryData, setCatagoryData] = useState([])
const [loader, setLoader] = useState(true)
    useEffect(()=>{
fetch('http://localhost:5000/category')
.then(res => res.json()
.then(data => {setCatagoryData(data)


    setLoader(false)
})
)


    },[])
    return (
        <div  className="w-[96%] mt-20 md:w-[90%] mx-w-[1220px] mx-auto">


<Slide  duration={2000}>
<h1  className='text-3xl font-bold font-raleway text-center'> All Craft Categories</h1>
</Slide>
<Zoom duration={2000} delay={500}>



<p className='text-gray-600 font-work-sense text-center mt-4 mb-12 w-[70%] mx-auto'>Explore a curated collection celebrating craftsmanship, sustainability, and style, offering a range of unique, functional, and eco-conscious creations.</p>





</Zoom>


{
         loader && <div className="text-center flex mt-16 justify-center w-[100%]">


<span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
                </div>
            }
      <div  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {
catagoryData.map(catagoryData=> <CatagoryCard  key={catagoryData._id} catagoryData={catagoryData}>  </CatagoryCard>)

         }
      </div>
        </div>
    );
};

export default Catagory;