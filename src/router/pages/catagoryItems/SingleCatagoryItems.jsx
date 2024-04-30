
import PropTypes from 'prop-types';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';


const SingleCatagoryItems = ({data}) => {

    const {items_name, photo , _id, prosessing_time,  rating, description, catagory, price} = data;
    return (
        <div>
<div className="card rounded-lg overflow-hidden shadow-lg bg-white">
  <img src={photo} className="w-full h-40 sm:object-cover" alt="Product" />
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">{items_name}</h2>
    <p className="text-gray-600 mb-2">Category: <span className="italic font-medium">{catagory}</span></p>
    <p className="text-gray-600 mb-2">Processing Time: <span className="italic font-medium">{prosessing_time}</span></p>
    <hr className="my-2" />
    <p className="text-gray-800 sm:min-h-24">{description}</p>
    <div className="flex justify-between items-center mt-3">
      <div className="badge badge-outline flex items-center">
        <FaBangladeshiTakaSign className="mr-1" /> {price}
      </div>
      <div className="badge badge-secondary flex items-center">
        <FcRating className="mr-1" /> {rating}
      </div>
    </div>
    <div className="mt-4">
      <Link to={`/details/${_id}`}>
        <button className="btn text-white bg-[#847B4F] w-full py-2 rounded-md hover:bg-[#6C6341] focus:outline-none focus:ring-2 focus:ring-[#847B4F] focus:ring-opacity-50">View Details</button>
      </Link>
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