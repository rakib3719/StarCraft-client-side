import { Link, useRouteError } from "react-router-dom";

import errorImg from '../../../assets/Ilustration (1).png'

const Error = () => {
    const error = useRouteError()
    return (
     

        <div className="w-[90%] mt-16 justify-between mx-auto mx-w-[1220px] flex flex-col-reverse md:flex-row  items-center bg-white  ">
                 
        
         <div  className="text-center w-[50%] mx-auto mt-8 md:mt-0">
                 
                     <p  className="text-3xl font-poppins text-red-700 font-bold">OOPS..</p>
                   {
                   error.statusText ?   <p  className="text-red-600 font-bold"> Page {error.statusText} </p> : <p>Something is wrong</p>
                   }
                     <p className="text-red-600">{error.data}</p>
            <div  className="mt-8 pb-4">
        
            <Link to={-1} className="btn w-[120px] bg-[#847B4F] text-black" > Go Back </Link> <Link to='/' className="btn bg-[#4F847B] text-white mt-4 " > Back to home </Link>
            </div>
                 </div>
                 
                 <div  className="error-bg">
                 <img  src={errorImg}alt="" className={error.status == "404" ? ' w-[70%] mx-auto' : 'hidden'}/>
            <h1 className={!error.status == "404" ? 'text-3xl font-playFair text-red-700  font-bold p-48' : 'hidden'}> Somtheing is worng </h1>
                 </div>
                 
                         </div>
           
    );
};

export default Error;