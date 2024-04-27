
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const CatagoryCard = ({catagoryData}) => {
    console.log(catagoryData);

    const {category_name, description, finish,  photo,style
        } = catagoryData;
        const navigate = useNavigate()
    
    return (
        <div onClick={()=>{
navigate(`/catagory_items/${category_name}`)
        }} className='shadow-xl  rounded-xl' >
       <div className=' '>



   <img src={photo} className='rounded w-full h-[200px] ' alt="" />

        <div className='mt-8 px-4 pb-4 space-y-2'>
<h1  className='text-xl font-raleway font-bold h-[50px]'> {category_name} </h1>

<p className='font-work-sense h-[120px]'>{description}</p>
<hr className='mt-2 py-2'/>
<p  className='font-work-sense italic'> Finishing: {finish} </p>
<p className='font-work-sense italic'> Style: {style} </p>
        </div>
       </div>
       <div>


       </div>
        </div>
    );
};

CatagoryCard.propTypes = {
    catagoryData: PropTypes.object
};

export default CatagoryCard;