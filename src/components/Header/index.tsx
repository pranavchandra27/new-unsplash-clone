import React from 'react'
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { setSearchQuery } from "@context/actions";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [value, setValue] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    router.push(`s/photos/${value}`);
    setSearchQuery(value);
  };
  return (
    <nav className="h-16 flex items-center px-5">
      <div className="flex-1 flex items-center">
        <Link href="/">
          <div className="hidden sm:block w-24 cursor-pointer">
            <p className="text-md font-medium">Splash</p>
          </div>
        </Link>
        <form onSubmit={handleSubmit} className="transition duration-300 ease-in-out w-full h-10 flex items-center rounded-full bg-gray-100 px-5 hover:ring-1 hover:ring-gray-200 focus-within:bg-white focus-within:ring-1 focus-within ring-gray-200">
          <span className="text-md text-gray-700 ">
            <IoSearchOutline />
          </span>
          <input
           value={value}
           onChange={(e) => setValue(e.target.value.trimStart())}
            type="search"
            placeholder="Search free high-resolution photos"
            className="w-full focus:placeholder-shown:text-gray-800 placeholder-shown:font-normal font-medium text-md text-gray-700 ml-4 placeholder-shown:text-sm outline-none bg-transparent"
          />
        </form>
        <div className="ml-5">
          <Link href="/collections">
            <span className="text-gray-500 hover:text-gray-700 font-medium cursor-pointer">Collections</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
