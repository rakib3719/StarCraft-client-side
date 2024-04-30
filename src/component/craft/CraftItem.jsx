
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CraftItem = ({craftData}) => {

    const {items_name, photo , _id, stock_status, prosessing_time,  catagory, price}  = craftData
    return (
        <div>
 <div className="card bg-base-100 border-2 p-4 shadow-lg rounded-xl ">
      <figure className="mb-4">
        <img src={photo} alt={items_name} className="w-full rounded-xl h-[200px] object-cover" />
      </figure>
      <div className="font-raleway">
        <h2 className="card-title text-2xl mb-2">{items_name}</h2>
        <p className="text-sm font-medium text-gray-600">{catagory}</p>
        <p className="text-lg font-semibold text-[#FFA500] mb-2">Price: ${price}</p>
        <p className="text-sm text-gray-600">Stock Status: {stock_status}</p>
        <p className="text-sm text-gray-600">Processing Time: {prosessing_time}</p>

        <div className="mt-4">
          <Link to={`/details/${_id}`}>
            <button className="btn  w-full text-white bg-[#847B4F] transition duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
        </div>
    );
};

CraftItem.propTypes = {
    craftData: PropTypes.object 
};

export default CraftItem;