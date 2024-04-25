import { Link, NavLink } from "react-router-dom";

const nav = <div className="lg:flex text-lg font-poppins">
    
<li>    <NavLink  to='/' >  Home </NavLink></li>

<li>    <NavLink  to='/update_profile' > All Art & craft </NavLink>  </li>
<li>    <NavLink  to='/investment' >  Add Craft </NavLink></li> 
<li>    <NavLink  to='/investment' >  My Art&Craft List </NavLink></li> 


    </div>
const Navbar = () => {

    return (
        <div   className="navbar  z-10 relative">
        <div className="navbar bg-base-100">
 <div className="navbar-start">
   <div className="dropdown">
     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
     </div>
     <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
       {nav}
     </ul>
   </div>
   <a className="  text-[16px] sm:text-2xl font-bold font-playFair -ml-3 sm:-ml-0"> StarCraft </a>
 </div>
 <div className="navbar-center hidden lg:flex">
   <ul className="menu menu-horizontal px-1">

       {nav}
   </ul>
 </div>

 <div>

  
 </div>








</div> 


<div className="navbar-end  flex items-center">
<Link  to='/login'>
 <button  className="btn text-white bg-[#4F847B]">  Log in </button></Link>
<Link  to='/registar'> <button  className="btn ml-4 text-white bg-[#847B4F]">  Registar </button></Link>


</div>





</div>
    
    );
};

export default Navbar;