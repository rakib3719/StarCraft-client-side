
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../component/navbar/Navbar";


const Registar = () => {
const {updatesProfile, registar} = useContext(AuthContext)
    const regiHandle = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

     
    
        console.log(email,name, password, photo);

        if(password.length < 6){
            toast.error("Password should be at least 6 characters");
            return
              }

        if(!/^(?=.*[A-Z])(?=.*[a-z]).+$/.test(password)){
 toast.error("Password Must have a Lowercase and a Uppercase letter");
 return
        }

registar(email,password)
.then(result => {

    console.log(result.user);
    updatesProfile(name, photo)
    .then(() => {
        // Profile updated!
        // ...
    
    
      })
      
      .catch((error) => {
      console.log(error);
      });
      toast("Registration Successfully")

})
.catch((error) => {
    if( error.message === "Firebase: Error (auth/email-already-in-use)."){

        toast.error("This email is already in use.")
        return
      }
       
        toast.error(error.message)
    });

  
    

    }
    return (
        <div>
          <Navbar></Navbar>
              
           <div  className="regbg pt-20 pb-20">
      
           <ToastContainer></ToastContainer>
      <div className="login mx-auto w-[80%] md:w-1/2 md:ml-auto p-8 text-white backdrop-blur-3xl md:backdrop-blur-none md:mr-16 ">

      <form onSubmit={ regiHandle} >

        <h1 className="font-bold text-3xl text-white">Registar</h1>
        <p>Welcome to us!</p>



        <hr />


        <label className="form-control w-full  ">
<div className="label mt-4">
<span className="label-text text-white font-semibold">Name</span>

</div>
<input type="text"  name="name" placeholder="Enter Your Name" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>


        <label className="form-control w-full  ">
<div className="label mt-4">
<span className="label-text text-white font-semibold">Email</span>

</div>
<input required type="email" name="email" placeholder="Enter Your Email" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>



<label className="form-control w-full  ">
<div className="label mt-4">
<span className="label-text text-white font-semibold">Photo URL</span>

</div>
<input type="text" name="photo" placeholder="Enter Your Photo URL" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>


        <label className="form-control w-full  ">
<div className="label mt-4">
<span className="label-text text-white font-semibold">Password</span>

</div>
<input required type="text" name="password" placeholder="Enter Your Password" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
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