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
      className="w-full h-[720px] relative rounded"
      key={_id}
      onClick={clickHandler}
    >
      <img
        src={item.image}
        alt="Product"
        className="h-full w-full object-contain"
      />

      <p className="absolute bottom-12 font-semibold tracking-wider left-3/12 ml-6 -translate-x-1/2 text-black px-4 py-2 rounded-full cursor-pointer ">
        {item.name}
      </p>
      <div>
        <button className="absolute bottom-2 left-3/12 ml-7   -translate-x-1/2 text-white bg-black px-4 py-2 rounded-full cursor-pointer ">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard
