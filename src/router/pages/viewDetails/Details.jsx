import { useLoaderData } from "react-router-dom";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
// import Navbar from "../../../component/navbar/Navbar";






const Details = () => {
const craftData= useLoaderData()

    const {items_name,email,user_name, photo , stock_status, prosessing_time, customization, rating, description, catagory, price} = craftData;
    console.log(craftData);
    return (
       <div>
        {/* <Navbar></Navbar> */}
         <div className="w-[96%] mb-8 mt-8 md:w-[90%] mx-w-[1220px] mx-auto">

<div className="lg:flex lg:gap-8  border-2 px-2 sm:px-4 rounded-xl py-8">

<div  className="lg:w-1/2 flex ">

<img src={photo}  className="rounded-md border-2 w-full" alt="" />

</div>


<div className="bg-black rounded-md px-4 sm:px-10 py-8 lg:w-1/2 space-y-2">
    {/*   
    bg-[#4F847B, #847B4F] */}

<p  className="text-[#4F847B] font-poppoins"> {stock_status} </p>
<h1  className="text-white text-3xl font-raleway">{items_name}</h1>
<h1  className="text-[#B9B9B9] text-lg italic font-raleway"> Catagory:- {catagory}</h1>

<h2   className="text-xl font-poppoins gap-2 text-white flex items-center"> <FaBangladeshiTakaSign className="text-white"/> {price} </h2>


<h1  className="font-raleway text-2xl   text-white font-semibold ">Description</h1>
<hr className=""/>
<p className="text-white font-work-sense">{description}</p>


<div  className="sm:flex justify-between">

    <div className="mt-8">  

        <h6 className="text-white font-poppoins font-semibold">Prosessing Time</h6>
     <hr className="mt-2"/>
        <p  className="text-white p-2 text-center rounded-3xl mt-2 bg-[#26272A]">{prosessing_time}</p>
         </div>

   
    <div className="mt-8">  

        <h6 className="text-white font-poppoins font-semibold">Customization</h6>
     <hr className="mt-2"/>
        <p  className="text-white flex justify-center  p-2 text-center rounded-3xl mt-2 bg-[#26272A]">{
customization==='yes' ? <FaCheckSquare className="text-[#3434ff] text-xl flex text-center"></FaCheckSquare> : <RxCrossCircled  className="text-[#ff2525] text-xl flex text-center" />

        }</p>
         </div>
         <div className="mt-8">  

<h6 className="text-white font-poppoins font-semibold">Rating</h6>
<hr className="mt-2"/>
<p  className="text-white p-2 text-center rounded-3xl mt-2 bg-[#26272A]">{rating}</p>
 </div>


</div>
<div className="pt-2">
<h1  className="text-white mt-2 font-raleway italic font-semibold"> Added By {user_name} </h1>
<h1   className="text-white mt-2 font-raleway italic font-semibold">Email: {email}</h1>

</div>
</div>


</div>

        </div>
       </div>
    );
};

export default Details;