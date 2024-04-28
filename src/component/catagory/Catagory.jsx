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

{
              catagoryData.length < 1 && <div className="text-center flex mt-16 justify-center w-[100%]">


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