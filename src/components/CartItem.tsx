import axios from "axios";
import toast from "react-hot-toast";
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";

interface CartItemProps {
  item: any;
  removeItemFromUI:(id:string) => void;
}

const CartItem = ({item,removeItemFromUI }:CartItemProps) => {
    const backend_url = import.meta.env.VITE_BACKEND_URL;
    console.log(item);
    
    const deleteItem = async(productId:string) => {
    try{
      const token = localStorage.getItem("Authorization");
         const res = await axios.delete(`${backend_url}/product/cart/remove`, {
           data: { productId },
           headers:{
            Authorization:`Bearer ${token}`
           }
         });

         console.log(res);
      toast.success("Item Removed!");
      
      removeItemFromUI(productId)

    }catch(e){
      console.log(e);
    }
  }
  return (
    <div className="flex items-start gap-4 mb-6 border-b pb-4">
      <img
        src={item.productId.image}
        alt={item.name}
        className="w-24 h-28 rounded-lg object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">Variant: {item.productId.name}</p>
        <p className="text-sm text-gray-500">Size: {item.size}</p>
        <p className="text-sm text-gray-500">Color: pink</p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-4 text-xl text-gray-600">
            <FaHeart className="cursor-pointer" />
            <FaTrashAlt className="cursor-pointer" onClick={() => deleteItem(item.productId._id)}/>
          </div>
          <div className="flex items-center gap-4">
            <FiMinus className="cursor-pointer" />
            <span>{item.quantity}</span>
            <FiPlus className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="text-lg font-semibold text-right">₹{item.productId.price}.00</div>
    </div>
  );
};

export default CartItem;
