import { IoIosSearch } from "react-icons/io";
import { LuLogIn } from "react-icons/lu";
import { FaBagShopping } from "react-icons/fa6";
import Logo from "@/assets/Nex Logo.jpeg";

const Navbar = () => {
  return (
    <nav className="flex justify-center mx-4 items-center">
      <div className="flex justify-between items-center px-8 py-4 text-black bg-white w-full mx-6">
        <div className="flex items-center gap-10">
          <div className="w-[40px] h-[40px] ">
            <img src={Logo} alt="" className="rounded-sm"/>
          </div>
          <h1 className="text-2xl font-semibold ">NEX STORE</h1>
          <ul className="flex gap-4 text-md  items-center font-semibold">
            <li className="hover:border-b-2 border-black cursor-pointer">
              All
            </li>
            <li className="hover:border-b-2 border-black cursor-pointer">
              Men
            </li>
            <li className="hover:border-b-2 border-black cursor-pointer">
              Women
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-[450px]">
            <input
              type="text"
              placeholder="search"
              className="w-full border border-gray-900 px-4 py-2 text-black rounded-lg pr-10"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl  cursor-pointer">
              <IoIosSearch />
            </div>
          </div>
          <div>
            <button className="text-xl  ">
              <LuLogIn className="" />
            </button>
          </div>
          <div className="cursor-pointer">
            <button className="text-xl  ">
              <FaBagShopping className="" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
