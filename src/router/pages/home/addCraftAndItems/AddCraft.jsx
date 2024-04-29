import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import Swal from "sweetalert2";
import Navbar from "../../../../component/navbar/Navbar";



const AddCraft = () => {
const {user} = useContext(AuthContext)
console.log(user);
    const addHandle = e =>{

        e.preventDefault();
 
        const form = e.target;
        const user_name = form.user_name.value
        const email = form.email.value;
        const items_name = form.name.value;
        const photo = form.photo.value
        const price = form.price.value
        const stock_status = form.stock.value
        const prosessing_time = form.time.value
        const customization  = form.customization.value
        const rating = form.rating.value
        const description  = form.description.value
        const catagory = form.catagory.value
        
        
        const productInfo = {    email, user_name ,items_name, photo , stock_status, prosessing_time, customization, rating, description, catagory, price};
        
        console.log(productInfo);
      fetch('https://star-craft-server-site.vercel.app/add_craft',{

      method:'POST',
   headers: {

    'content-type' : 'application/json'
   },
   body: JSON.stringify(productInfo)
      })
      .then(res => res.json())
      .then(data => {console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Successfully Added Items!',
          text: 'Thank You',
          icon: 'success',
       
        })
        form.reset()
        
      }
      
      })
      
      }
        
    return (

      
       <div>

        <Navbar></Navbar>
         <div   className="addBg py-24">

<div  className="add-form-bg w-[80%] mx-auto p-8 ">
<form onSubmit={addHandle} className="" >
<h1 className="txt-3xl font-bold text-center text-white ">Add Your Craft Item</h1>
<div className="md:flex gap-8 mt-8">

<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Email</span>

</div> 
<input defaultValue={user.email} type="text" name="email" placeholder="Type here Email" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>
<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">User Name</span>

</div> 
<input defaultValue={user.displayName} type="text" name="user_name" placeholder="Type here User Name" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

</div>


<div className="md:flex gap-8 mt-8">


<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Item Name</span>

</div>

<input type="text" name="name" placeholder="Type here Item Name" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Price</span>

</div>

<input type="number" name="price" placeholder="Type here Price" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

</div>
<div className="md:flex mt-8 gap-8">



<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Sub-Category Name
</span>

</div>



<select name="catagory" className=" input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-[10px] border-2 border-[#EFEFEF]" id="">

<option value="Wooden Furniture & Sculptures"> 1.Wooden Furniture & Sculptures
</option>
<option value="Wooden Home Decor"> 2. Wooden Home Decor
</option>
<option value="Wooden Utensils and Kitchenware"> 3. Wooden Utensils and Kitchenware
</option>
<option value="Jute Home Decor"> 4. Jute Home Decor
</option>
<option value="Jute Kitchenware & utensils"> 5. Jute Kitchenware & utensils
</option>
<option value="Jute and wooden jewellery"> 6. Jute and wooden jewellery

</option>

</select>


<div className="label">

</div>
</label>




<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold"> Short Description
</span>

</div>
<input type="text" name="description" placeholder="Type here Description" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

</div>




<div className="md:flex gap-8 mt-8">


<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Rating</span>

</div>
<input type="number" name="rating" placeholder="Type here Rating" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Customization</span>

</div>

<select name="customization" className="input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-[10px] border-2 border-[#EFEFEF]" id="">

<option value="yes"> Yes </option>
<option value="no"> No </option>

</select>

<div className="label">

</div>
</label>

</div>


<div className="md:flex gap-8 mt-8">


<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold"> Processing Time</span>

</div>

<input type="text" name="time" placeholder="Type here Processing Time" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold"> Stock Status</span>

</div>


<select name="stock" className="input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-[10px] border-2 border-[#EFEFEF]" id="">

<option value="In Stock">  In stock </option>
<option value="Made to Order">  Made to Order </option>

</select>

<div className="label">

</div>
</label>

</div>



<div className=" mt-8 gap-8">

<label className="form-control w-full  ">
<div className="label">
<span className="label-text text-white font-semibold">Image-URL</span>

</div>

<input type="text" name="photo" placeholder="Type here Image URL" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />

</label>


</div>

<button  className="w-full text-white font-bold mt-8 px-2 py-2 border-2 border-[#EFEFEF] rounded-2xl"><input type="submit" value="ADD Product" /></button>
</form>
</div>
  </div>
       </div>
    );
};

export default AddCraft;