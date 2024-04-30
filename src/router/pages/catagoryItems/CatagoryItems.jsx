import { useLoaderData, useParams } from "react-router-dom";
import SingleCatagoryItems from "./SingleCatagoryItems";
import { useEffect } from "react";
// import Navbar from "../../../component/navbar/Navbar";



const CatagoryItems = () => {
  useEffect(()=>{
    document.querySelector("html").setAttribute("data-theme", "light");

  },[])
    const data = useLoaderData()
    const params = useParams()
    console.log(data);
    return (
      <div>
        {/* <Navbar></Navbar> */}
          <div  className="w-[96%] mb-8 mt-12 md:w-[90%] max-w-[1620px] mx-auto"> 


<h1 className="text-2xl font-bold text-center font-raleway">  {params.category_name}  </h1>

<div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">


{

 data.map(data => <SingleCatagoryItems 
     key={data._id}
     data={data}
     
     ></SingleCatagoryItems>)
}
</div>

 </div>
      </div>
    );
};

export default CatagoryItems;