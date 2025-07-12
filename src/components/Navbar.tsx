import { IoIosSearch } from "react-icons/io";
import { LuLogIn } from "react-icons/lu";
import { FaBagShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <div className="flex justify-between items-center px-8 py-4 text-white bg-gray-900 w-[1300px]">
        <div className="flex items-center gap-10">
          <div></div>
          <h1 className="text-xl font-semibold ">NEX STORE</h1>
          <ul className="flex gap-4 text-sm font-light items-center">
            <li>All</li>
            <li>Men</li>
            <li>Women</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="search"
            className=" border border-gray-600 px-2 py-1 text-white rounded w-[450px]"
          />
          <div className="flex absolute ml-[410px] text-2xl">
            <IoIosSearch />
          </div>
          <button className="text-xl  ">
            <LuLogIn />
          </button>
          <button className="text-xl  ">
            <FaBagShopping />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
