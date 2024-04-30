import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUser } from "react-icons/fa";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { useState } from 'react';






const nav = <div className="lg:flex text-lg font-poppins">
    
<li>    <NavLink  to='/' >  Home </NavLink></li>

<li>    <NavLink  to='/all_crafts' > All Art & craft Items </NavLink>  </li>
<li>    <NavLink  to='/add_crafts' >  Add Craft Item </NavLink></li> 
<li>    <NavLink  to='/my_crafts' >  My Art&Craft List </NavLink></li> 


    </div>
const Navbar = () => {
const {user, logOut} = useContext(AuthContext)
const logOuthandle = ()=>{
logOut()
.then(result => {
  console.log(result);
})
.catch(error => {
  console.log(error);
})
}
const [isOpen, setIsOpen] = useState(false)

// max-w-[1620px]
    return (
        <div   className="navbar w-[96%] md:w-[95%] mx-auto max-w-[1620px]  z-10 relative">
        <div className="navbar ">
 <div className="navbar-start">
   <div className="dropdown">
     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-4">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
     </div>
     <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
       {nav}
     </ul>
   </div>
   <a className="  text-[16px] sm:text-2xl font-bold font-playFair -ml-4 sm:-ml-0"> StarCraft </a>
 </div>
 <div className={!user? "navbar-center hidden -mr-36 lg:flex" : "navbar-center hidden mr-24 lg:flex"}>
   <ul className="menu menu-horizontal px-1">

       {nav}
   </ul>
 </div>

 <div>

  
 </div>








</div> 


{


    !user ? <div className="navbar-end  flex items-center">
    <Link  to='/login'>
     <button  className="btn w-[74px] xl:w-[100px]  text-white bg-[#4F847B]">  Log In </button></Link>
    <Link  to='/registar'> <button  className="btn ml-4 text-white bg-[#847B4F]">  Registar </button></Link>
  
    </div>: <div>

{
          user.photoURL ?       <img 
          
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Click me!"
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen(!isOpen)} 
          
          src={user.photoURL} className="w-10 sm:w-12 mt-2 rounded-full h-10 sm:h-12 border-2 border-[#ffe45e]" alt="" /> :<FaUser className="sm:text-3xl " 
          
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Click me!"
          onMouseEnter={() => setIsOpen(true)}
          onClick={() => setIsOpen(!isOpen)}


           ></FaUser> 
}



<Tooltip
  id="my-tooltip"
  clickable={true}
  content={

<div >

<h1 className="font-bold font-raleway">{user.displayName}</h1>
<button onClick={logOuthandle} className="bg-[#847B4F] font-bold border-none text-white btn w-full mt-2 "> Log Out </button>

</div>

  }
  isOpen={isOpen}
/>

    </div>

}







</div>
    
    );
};

export default Navbar;