import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <nav className="h-16 flex w-full items-center px-5">
      <div className="flex-1 flex items-center">
        <Link href="/">
          <div className="w-40">
            <p className="text-md font-medium">Splash</p>
            <p className="text-sm">Photos for everyone</p>
          </div>
        </Link>
        <form className="transition duration-300 ease-in-out w-full h-10 flex items-center rounded-full bg-gray-100 px-5 hover:ring-1 hover:ring-gray-200 focus-within:bg-white focus-within:ring-1 focus-within ring-gray-200">
          <span className="text-md text-gray-700 ">
            <IoSearchOutline />
          </span>
          <input
            type="search"
            placeholder="Search free high-resolution photos"
            className="w-full focus:placeholder-shown:text-gray-800 placeholder-shown:font-normal font-medium text-md text-gray-700 ml-4 placeholder-shown:text-sm outline-none bg-transparent"
          />
        </form>
      </div>
    </nav>
  );
};

export default Header;
