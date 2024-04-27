import { useEffect, useState } from "react";
import CatagoryCard from "./CatagoryCard";


const Catagory = () => {

const [catagoryData, setCatagoryData] = useState([])
    useEffect(()=>{
fetch('http://localhost:5000/category')
.then(res => res.json()
.then(data => setCatagoryData(data))
)


    },[])
    return (
        <div  className="w-[96%] mt-20 md:w-[90%] mx-w-[1220px] mx-auto">
      <div  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {
catagoryData.map(catagoryData=> <CatagoryCard  key={catagoryData._id} catagoryData={catagoryData}>  </CatagoryCard>)

         }
      </div>
        </div>
    );
};

export default Catagory;