import { Link } from "react-router-dom";
import {  FaGoogle, FaTwitter } from "react-icons/fa";


const Login = () => {
    const loginHandle = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    return (
        <div  className="loginbg pt-20 pb-20">
      

      <div className="login mx-auto w-[80%] md:w-1/2 md:ml-auto p-8 text-white backdrop-blur-3xl md:backdrop-blur-none md:mr-16 ">

      <form onSubmit={loginHandle} >

        <h1 className="font-bold text-3xl text-white">Login</h1>
        <p>Welcome to us!</p>



        <hr />

        <label className="form-control w-full  ">
<div className="label mt-4">
<span className="label-text text-white font-semibold">Email</span>

</div>
<input type="text" name="email" placeholder="Enter Your Email" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

        <label className="form-control w-full  ">
<div className="label mt-4">
<span className="label-text text-white font-semibold">Password</span>

</div>
<input type="text" name="password" placeholder="Enter Your Password" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>
<input type="submit" className=" btn p-2  rounded-2xl mt-4  bg-[#4f847b] w-full" value="Log In" />
      </form>
      <p className="mt-2 text-center font-bold ">Or log In with</p>
      <div className="text-center sm:flex items-center justify-center">



<button  className="btn justify-center flex gap-2 py-2 items-center bg-[#357488] sm:max-w-xs sm:w-auto  rounded-full w-full  hover:bg-[#4595ae] mt-2 text-white px-10 mr-3" > <FaGoogle></FaGoogle>  Goggle </button>
<button  className="btn sm:w-auto justify-center flex gap-2 py-2 items-center  bg-blue-900 px-10 w-full mt-2 sm:max-w-xs  font-bold rounded-full">  <FaTwitter></FaTwitter>

Twitter
</button>
</div>
      <p className="text-center mt-2">Don't  have any account? Please <Link to={'/registar'} className="text-[#4f847b] font-bold underline text-lg"> Registar </Link></p>
      </div>
   
        </div>
    );
};

export default Login;