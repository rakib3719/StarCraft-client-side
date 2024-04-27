
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CraftItem = ({craftData}) => {
    console.log(craftData);
    const {items_name, photo , _id, stock_status, prosessing_time,  catagory, price}  = craftData
    return (
        <div>
           <div className="card bg-base-100 border-2 p-4">
  <figure><img src={photo} className='w-[100%] rounded-xl h-[300px]'  /></figure>
  <div className="card-body font-raleway ">
<div className='h-[240px] sm:h-[200px] md:h-[220px] space-y-2 '>
<h2 className="card-title text-2xl"> {items_name} </h2>
    <p className='font-medium font-work-sense'>  {catagory}</p>
<p>Price: {price}</p>
<p>{stock_status}</p>
<p> Proccessing Time: {prosessing_time} </p>
</div>
{/* */}
    <div className=" font-raleway">
     <Link   to={`http://localhost:5173/details/${_id}`}> <button  className="btn text-white text-center  bg-[#847B4F] w-full">View Details</button></Link>
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