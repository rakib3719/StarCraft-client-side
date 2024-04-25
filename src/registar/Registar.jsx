
import { Link } from "react-router-dom";



const Registar = () => {

    const loginHandle = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);}
    return (
        <div>
           <div  className="regbg pt-20 pb-20">
      

      <div className="login mx-auto w-[80%] md:w-1/2 md:ml-auto p-8 text-white backdrop-blur-3xl md:backdrop-blur-none md:mr-16 ">

      <form onSubmit={loginHandle} >

        <h1 className="font-bold text-3xl text-white">Registar</h1>
        <p>Welcome to us!</p>



        <hr />


        <label className="form-control w-full  ">
<div className="label mt-4">
<span className="label-text text-white font-semibold">Email</span>

</div>
<input type="text"  name="name" placeholder="Enter Your Email" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>


        <label className="form-control w-full  ">
<div className="label mt-4">
<span className="label-text text-white font-semibold">Email</span>

</div>
<input type="email" name="email" placeholder="Enter Your Email" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
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
<input type="submit" className=" btn p-2  rounded-2xl mt-4  bg-[#4f847b] w-full" value="Registar" />

<p className="text-center mt-2">Already have an account? Please <Link to={'/login'} className="text-[#4f847b] font-bold underline text-lg"> Log In </Link></p>
      </form>
      </div>
        </div>
        </div>
    );
};

export default Registar;