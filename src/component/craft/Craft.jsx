import { useEffect, useState } from "react";
import CraftItem from "./CraftItem";


const Craft = () => {

const [craftData, setCraftData] = useState([])
    useEffect(()=>{
fetch('http://localhost:5000/craft')
.then(res => res.json())
.then(data => setCraftData(data))


    },[])
    return (
        <div className="w-[96%] mt-20 md:w-[90%] mx-w-[1220px] mx-auto">
            <div  className="text-center">
            <h1 className="font-raleway text-3xl font-bold"> Our some Products </h1>
            <p  className="font-work-sense text-">Our professionalism, good service & trust to the home repair maintenance business.</p>
            </div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">


    {
craftData.map(craftData => <CraftItem key={craftData._id} craftData={craftData} ></CraftItem>)
    }
</div>

        </div>
    );
};

export default Craft;
