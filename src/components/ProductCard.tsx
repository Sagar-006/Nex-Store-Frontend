import { useNavigate } from "react-router-dom";

export interface cardType {
  title?: string;
  price?: number;
  img?: string;
}

// Featured Product Card
const ProductCard = ({ item, _id }: any) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/products/${item._id}`);
  };

  return (
    <div
      className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      key={_id}
      onClick={clickHandler}
    >
      <img
        src={item.image}
        alt={item.name}
        className="h-full w-full object-cover"
      />

      {/* Product Name */}
      <p className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-sm sm:text-base lg:text-lg font-semibold bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-black">
        {item.name}
      </p>

      {/* Explore Button */}
      <button className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-black text-xs sm:text-sm bg-white px-4 py-1 rounded-full shadow hover:bg-gray-200 transition">
        EXPLORE
      </button>
    </div>
  );
};

export default ProductCard;
