import { useEffect, useState } from "react";
import CraftItem from "./CraftItem";
import {  Slide, Zoom } from "react-awesome-reveal";



const Craft = () => {

const [craftData, setCraftData] = useState([])
const [loader, setLoader] = useState(true)
    useEffect(()=>{
fetch('http://localhost:5000/craft')
.then(res => res.json())
.then(data =>{ setCraftData(data)

    setLoader(false)
}

)


    },[])
    return (


        <div className="w-[96%] mt-20 md:w-[90%] mx-w-[1220px] mx-auto">
          
        
          <div  className="text-center">
          <Slide duration={2000} >
          <h1 className="font-raleway text-3xl font-bold"> Our some Crafts Item </h1>
          </Slide>
          <Zoom duration={2000} delay={500}>  
            <p  className="font-work-sense text-">Our professionalism, good service & trust to the home repair maintenance business.</p></Zoom>
            </div>
    
            {
               loader && <div className="text-center flex mt-16 justify-center w-[100%]">


<span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
                </div>
            }
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">


    {
craftData.map(craftData => <CraftItem key={craftData._id} craftData={craftData} ></CraftItem>)
    }
</div>

        </div>
    );
};

export default Craft;
