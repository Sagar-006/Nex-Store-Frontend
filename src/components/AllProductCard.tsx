import { useNavigate } from "react-router-dom";

interface ProductProps {
  name: string;
  price: number;
  _id: string;
  
  img: any;
}

const AllProductCard = ({ name, price, _id, img , }: ProductProps) => {
    const navigate = useNavigate();
  return (
    <div
      className="bg-white  text-black dark:bg-black gray-900  dark:text-white relative group cursor-pointer"
      onClick={() => navigate(`/products/${_id}`)}
    >
      <div className="relative w-full h-[500px] overflow-hidden dark:rounded-xl">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="mt-2 px-1">
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-sm font-semibold ">Rs.{price}.00</p>
        {/* <p className="text-xs mt-1 text-gray-700">◼︎ ◻︎ ◼︎ +18</p> */}
      </div>
    </div>
  );
};

export default AllProductCard;
