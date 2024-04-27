
import PropTypes from 'prop-types';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';


const SingleCatagoryItems = ({data}) => {

    const {items_name, photo , _id, prosessing_time,  rating, description, catagory, price} = data;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure><img src={photo}  className='h-[240px] w-full'/></figure>
  <div className="card-body">
    <h2 className= "font-raleway font-semibold card-title">
  {items_name}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <h2 className= "font-work-sense font-semibold ">
  Catagory:  <span className='italic font-medium'>{catagory}</span>
   
    </h2>
    <p  className='italic font-medium'> Prosessing Time: <span className='italic font-medium'>{prosessing_time}</span> </p>
<hr />
    <p className='min-h-[100px]'>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline flex  items-center"> <FaBangladeshiTakaSign></FaBangladeshiTakaSign> {price}</div> 
      <div className="badge badge-outline">  <FcRating></FcRating> {rating}</div>
    </div>
    <div className=" font-raleway mt-4">
     <Link   to={`http://localhost:5173/details/${_id}`}> <button  className="btn text-white text-center  bg-[#847B4F] w-full">View Details</button></Link>
    </div>
  
  </div>
</div>
        </div>
    );
};

SingleCatagoryItems.propTypes = {
    data: PropTypes.object
};

export default SingleCatagoryItems;