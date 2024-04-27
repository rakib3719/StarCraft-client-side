import { useLoaderData } from "react-router-dom";


const UpdateItem = () => {
    const data= useLoaderData()
    console.log(data)
    return (
        <div>
         This is Update section   
        </div>
    );
};

export default UpdateItem;