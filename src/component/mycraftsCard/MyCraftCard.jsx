
import PropTypes from 'prop-types';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { CgShutterstock } from "react-icons/cg";
import { FcRating } from "react-icons/fc";
import { MdSystemUpdateAlt } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router-dom';







const MyCraftCard = ({craftsData, deleteHandle})=> {
    console.log(craftsData);
    const {items_name, photo , _id, stock_status,  customization, rating,  price} =craftsData;

const navigate = useNavigate()
  
    return (
      <div>

<div className="card  bg-base-100 border p-4">
<img src={photo} alt="crafts" className='w-full h-[250px] border-[#126456] border-2 rounded-sm rounded-b-none '  />

<div className='bg-[#126456] flex justify-between font-work-sense px-4 py-2 text-white' >
<h1 className='flex items-center gap-2'> <CgShutterstock   />  {stock_status} </h1>
<h1 className='flex items-center'> <FaBangladeshiTakaSign></FaBangladeshiTakaSign> {price} </h1>

</div>
  <div className="mt-4">
  <h1  className=" text-xl font-poppoins">{items_name}</h1>
<h1  className="text-[#645c5c] text-lg italic font-raleway"> customization?- {customization}</h1>

<p className='flex items-center gap-2 font-poppoins'> <FcRating />Rating: {rating}  </p>
<hr  className='mt-4'/>
    <div className=" flex mt-4 justify-between gap-2">

 <button onClick={()=>{
    navigate(`/update/${_id}`)
 }} className="btn font-poppoins w-1/2 bg-[#4F847B] text-white flex items-center gap-2">  <MdSystemUpdateAlt /> Update</button>


      <button onClick={()=>deleteHandle(_id)} className="btn font-poppoins w-1/2 bg-orange-600 text-white flex items-center gap-2">   <MdDeleteForever /> Delete</button>
    </div>
  </div>
</div>



      </div>

      
     
   
        
        
        
        
       
    );
};

MyCraftCard.propTypes = {
    craftsData: PropTypes.object,
    deleteHandle:PropTypes.func
};

export default MyCraftCard;