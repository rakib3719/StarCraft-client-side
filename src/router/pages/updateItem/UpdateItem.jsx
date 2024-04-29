import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
// import Navbar from "../../../component/navbar/Navbar";




const UpdateItem = () => {
    const craftsData= useLoaderData()
const{items_name, photo , stock_status, prosessing_time, customization, rating,_id, description, catagory, price} = craftsData


    const addHandle = e =>{

        e.preventDefault();
 
        const form = e.target;
        const items_name = form.name.value;
        const photo = form.photo.value
        const price = form.price.value
        const stock_status = form.stock.value
        const prosessing_time = form.time.value
        const customization  = form.customization.value
        const rating = form.rating.value
        const description  = form.description.value
        const catagory = form.catagory.value
        
        
        const itemsInfo = {   items_name, photo , stock_status, prosessing_time, customization, rating, description, catagory, price};
    console.log(itemsInfo);
    fetch(`https://star-craft-server-site.vercel.app/update/${_id}`, {


    method:'PUT',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(itemsInfo)

    })
    .then(res => res.json())
    .then(data => {
      
if(data.acknowledged){

  Swal.fire({
    position: "center",
    icon: "success",
    title: " Item Successfully Updated ",
    showConfirmButton: false,
    timer: 1500
  });
}

    })

    }
    return (
      <div>
{/* <Navbar></Navbar> */}

<div   className="updatepage py-24">

<div  className="bg-[#5d18715d] w-[80%] mx-auto p-8 ">
<form onSubmit={addHandle} className="text-gray-100" >
<h1 className="txt-3xl font-bold text-center text-white ">Update Your Item</h1>



<div className="md:flex gap-8 mt-8">


<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Item Name</span>

</div>

<input defaultValue={items_name} type="text" name="name" placeholder="Type here Item Name" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Price</span>

</div>

<input type="number" defaultValue={price} name="price" placeholder="Type here Price" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
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



<select defaultValue={catagory}  name="catagory" className=" input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-[10px] border-2 border-[#EFEFEF]" id="">

<option value="Wooden Furniture & Sculptures" className="text-black"> 1.Wooden Furniture & Sculptures
</option>
<option value="Wooden Home Decor" className="text-black"> 2. Wooden Home Decor
</option>
<option value="Wooden Utensils and Kitchenware" className="text-black"> 3.  Wooden Utensils and Kitchenware
</option>
<option value="Jute Home Decor" className="text-black"> 4.  Jute Home Decor
</option>
<option value="Jute Kitchenware & utensils" className="text-black"> 5.   Jute Kitchenware & utensils
</option>
<option value="Jute and wooden jewellery" className="text-black"> 6.   Jute and wooden jewellery

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
<input type="text" defaultValue={description} name="description" placeholder="Type here Description" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

</div>




<div className="md:flex gap-8 mt-8">


<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Rating</span>

</div>
<input type="number" defaultValue={rating} name="rating" placeholder="Type here Rating" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold">Customization</span>

</div>


<select defaultValue={customization} name="customization" className="input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-[10px] border-2 border-[#EFEFEF]"   id="">
<option value="yes" className="text-black"> Yes </option>
<option value="no" className="text-black"> No </option>

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

<input type="text" defaultValue={prosessing_time} name="time" placeholder="Type here Processing Time" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />
<div className="label">

</div>
</label>

<label className="form-control w-full ">
<div className="label">
<span className="label-text text-white font-semibold"> Stock Status</span>

</div>


<select defaultValue={stock_status} name="stock" className="input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-[10px] border-2 border-[#EFEFEF]" id="">

<option value="In Stock" className="text-black">  In stock </option>
<option value="Made to Order" className="text-black">  Made to Order </option>

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

<input type="text" defaultValue={photo} name="photo" placeholder="Type here Image-URL" className="input input-add input-bordered placeholder-[#EFEFEF] rounded-2xl mt-2  w-full bg-transparent outline-none px-2 py-2 border-2 border-[#EFEFEF]" />

</label>


</div>

<button  className="w-full text-white font-bold mt-8 px-2 py-2 border-2 border-[#EFEFEF] rounded-2xl"><input type="submit" value="Update" /></button>
</form>
</div>
  </div>
      </div>
    );
};

export default UpdateItem;