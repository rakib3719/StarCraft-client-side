import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import MyCraftCard from "../../../component/mycraftsCard/MyCraftCard";
import Swal from 'sweetalert2';

const MyCrafts = () => {

    const {user} = useContext(AuthContext)
const [craftsData, setCraftsData] = useState([])
useEffect(()=>{

    fetch(`http://localhost:5000/craft/${user.email}`)
.then(res => res.json())
.then(data => setCraftsData(data))
},[])

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
        <div className="w-[96%] mt-20 md:w-[90%] mx-w-[1220px] mx-auto">
         <h1  className="text-center text-3xl font-raleway font-bold"> My Crafts List </h1>

<div className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 ">



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
    );
};

export default MyCrafts;