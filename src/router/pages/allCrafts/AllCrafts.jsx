import { useEffect, useState } from "react";


const AllCrafts = () => {
    const [Alldata, setAllData] = useState([])


    useEffect(()=>{
fetch('http://localhost:5000/craft')
.then(res => res.json())
.then(data => setAllData(data))


    },[])
    return (
        <div className="w-[96%] mt-20 md:w-[90%] mx-w-[1220px] mx-auto">
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
    
      <td><button  className="rounded  py-2 px-2 text-white text-center bg-[#847B4F]  sm:px-5 sm:py-3 ">View Details</button></td>
          </tr>)
    }
    
    
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllCrafts;