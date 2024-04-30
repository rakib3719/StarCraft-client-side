import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
// import Navbar from "../../../component/navbar/Navbar";


const AllCrafts = () => {
    const [Alldata, setAllData] = useState([])
    const [loader, setLoader] =  useState(true)


    useEffect(()=>{
fetch('https://star-craft-server-site.vercel.app/craft')
.then(res => res.json())
.then(data =>{ setAllData(data)
  setLoader(false)
})


    },[])

    useEffect(()=>{
      document.querySelector("html").setAttribute("data-theme", "light");

    },[])
    return (
      <div  className="mb-14">

<div className="w-[96%] mt-20 md:w-[90%] max-w-[1620px] mx-auto">



<div className="w-[96%] mt-20 md:w-[90%] max-w-[1620px] mx-auto">
  <div className="text-center">
    <Fade direction="up" triggerOnce>
      <h1 className="text-3xl font-bold font-raleway mb-6">Explore Our Collection</h1>
    </Fade>
   
  </div>

  {/* Rest of your code here */}
</div>


         {
              loader ? <div className="text-center flex mt-32 justify-center w-[100%]">
         
         
         <span className="loading loading-bars loading-xs"></span>
         <span className="loading loading-bars loading-sm"></span>
         <span className="loading loading-bars loading-md"></span>
         <span className="loading loading-bars loading-lg"></span>
                         </div> :
         
         <div className="overflow-x-auto">
         <table className="table  table-xs sm:table-sm md:table-md lg:table-lg border border-gray-300">
           {/* head */}
           <thead className="bg-[#F3F4F6]">
             <tr>
               <th></th>
               <th  className="text-base">Item Name </th>
               <th className="text-base">Price</th>
               <th className="text-base">Stock Status</th>
               <th className="text-base">Details</th>
               
         
             </tr>
         
           </thead>
           
         
           <tbody>
             {/* row 1 */}
         
          
         
           {
         
               Alldata.map((alldata, idx )=>   <tr key={alldata._id}>
                   <th>{idx + 1}</th>
                   <td>{alldata.items_name}</td>
                   <td>{alldata.price}</td>
                   <td>{alldata.stock_status}</td>
           
             <td>  <Link  to={`/details/${alldata._id}`} ><button  className="rounded  py-2 px-2 text-white text-center bg-[#847B4F]  sm:px-5 sm:py-3 ">View Details</button></Link> </td>
                 </tr>)
           }
         
           
            
           </tbody>
         </table>
         </div>
                     }
         
                 </div>
      </div>
    );
};

export default AllCrafts;