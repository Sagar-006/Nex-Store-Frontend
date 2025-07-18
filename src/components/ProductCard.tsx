import {  useNavigate } from "react-router-dom";

export interface cardType {
  title?:string;
  price?:number;
  img?:string;
  
} 
// Featured products
const ProductCard = ({item,_id}:any) => {
  const navigate = useNavigate();
  console.log(_id);
  const clickHandler = () => {
    navigate(`/products/${item._id}`);
  }
  return (
    <div
      className="w-full h-[720px] relative rounded cursor-pointer "
      key={_id}
      onClick={clickHandler}
    >
      <img
        src={item.image}
        alt="Product"
        className="h-full w-full object-contain"
      />

      <p className="absolute bottom-7 left-1/2 transform -translate-x-1/2 text-lg font-semibold tracking-wide bg-white/80 backdrop-blur-sm px-5 py-0 rounded-full text-black">
        {item.name}
      </p>

      <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-black px-5 py-1 text-sm ">
        EXPLORE
      </button>
    </div>
  );
}

export default ProductCard
