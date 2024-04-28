import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import MyCraftCard from "../../../component/mycraftsCard/MyCraftCard";
import Swal from 'sweetalert2';
import Navbar from "../../../component/navbar/Navbar";

const MyCrafts = () => {


const [loader, setLoader] = useState(true)
    const {user} = useContext(AuthContext)
const [craftsData, setCraftsData] = useState([])
useEffect(()=>{

    fetch(`http://localhost:5000/craft/${user.email}`)
.then(res => res.json())
.then(data => {setCraftsData(data)

setLoader(false)
})
},[])

const all = ()=>{
  fetch(`http://localhost:5000/craft/${user.email}`)
.then(res => res.json())
.then(data => {setCraftsData(data)
  setLoader(false)
})



}
const customizable = ()=>{

  fetch(`http://localhost:5000/customization/${user.email}`)
.then(res => res.json())
.then(data => {setCraftsData(data)

  setLoader(false)
})


}
const nonCustomizable = ()=>{


fetch(`http://localhost:5000/customization_not/${user.email}`)
.then(res => res.json())
.then(data => {setCraftsData(data)

  setLoader(false)
})


}

const deleteHandle = (id) => {
    Swal.fire({
      title: `Are you sure?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            // Use the correct syntax for filtering the craftsData array
            const remainingCrafts = craftsData.filter(craft => craft._id !== id);
            setCraftsData(remainingCrafts);
            Swal.fire({
              title: "Deleted!",
              text: "Your Item has been deleted.",
              icon: "success"
            });
          }
        });
      }
    });
  };
  
    return (
       <div>
<Navbar></Navbar>
<div className="w-[96%] mt-20 md:w-[90%] mx-w-[1220px] mx-auto">
         <h1  className="text-center text-3xl font-raleway font-bold"> My Crafts List </h1>

       
<div  className="flex justify-center mt-4">

<details className="dropdown font-raleway ">
  <summary className="m-1 btn px-8">Filter</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={all} ><a>All Items</a></li>
    <li  onClick={customizable} ><a>Customizable items</a></li>
    <li  onClick={ nonCustomizable} ><a>Non-customizable items</a></li>
  </ul>
</details>
</div>

         {
           loader && <div className="text-center flex mt-16 justify-center w-[100%]">


<span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
                </div>
            }


<div className="grid mt-28 grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 ">



    {

        craftsData.map(craftsData=> <MyCraftCard 
            key={ craftsData._id }
            craftsData={craftsData}
            deleteHandle={deleteHandle}
            >

        </MyCraftCard>)
    }
</div>

        </div>
       </div>
    );
};

export default MyCrafts;