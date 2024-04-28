import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../component/navbar/Navbar";


const AllCrafts = () => {
    const [Alldata, setAllData] = useState([])
    const [loader, setLoader] =  useState(true)


    useEffect(()=>{
fetch('http://localhost:5000/craft')
.then(res => res.json())
.then(data =>{ setAllData(data)
  setLoader(false)
})


    },[])
    return (
      <div>
<Navbar></Navbar>
<div className="w-[96%] mt-20 md:w-[90%] mx-w-[1220px] mx-auto">
         <h1  className="text-center text-3xl font-raleway font-bold mb-16">Are all the items in here--</h1>

         {
              loader ? <div className="text-center flex mt-32 justify-center w-[100%]">
         
         
         <span className="loading loading-bars loading-xs"></span>
         <span className="loading loading-bars loading-sm"></span>
         <span className="loading loading-bars loading-md"></span>
         <span className="loading loading-bars loading-lg"></span>
                         </div> :
         
         <div className="overflow-x-auto">
         <table className="table  table-xs sm:table-sm md:table-md lg:table-lg">
           {/* head */}
           <thead>
             <tr>
               <th></th>
               <th>Item Name </th>
               <th>Price</th>
               <th>Stock Status</th>
               <th>Action</th>
               
         
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
           
             <td>  <Link  to={`http://localhost:5173/details/${alldata._id}`} ><button  className="rounded  py-2 px-2 text-white text-center bg-[#847B4F]  sm:px-5 sm:py-3 ">View Details</button></Link> </td>
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