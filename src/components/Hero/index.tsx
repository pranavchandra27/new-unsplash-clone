import Header from "@components/Header";
import { useData } from "@context/provider";
import { IoSearchOutline } from "react-icons/io5";

const Hero = () => {
  const { state: { headerPhoto: photo } } = useData()

  return (
    <header className="pb-12">
      <div className={`relative bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url(${photo?.urls.regular})`, backgroundColor: photo?.color }}>
        <div className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-20" />
        <div className="relative">
          <div className="w-full mx-4 pt-20 pb-16 md:w-4/6 md:mx-auto md:pt-36 md:pb-[132px]">
            <span className="text-white font-bold md:text-5xl text-2xl">Splash</span>
            <div className="text-white font-medium md:text-lg md:mt-4 md:mb-6 text-base mt-2 mb-0">
              <h1>The internet's source of free-usable-photos</h1>
              <p>Powered by creators everywhere.</p>
            </div>
            <div className="hidden md:block">
              <form className="flex items-center w-full bg-white h-14 rounded-md px-4 hover:ring-4 hover:ring-black hover:ring-opacity-10 focus-within:ring-4 focus-within:ring-black focus-within:ring-opacity-10">
                <span className="text-gray-500 mr-4 text-lg">
                  <IoSearchOutline />
                </span>
                <input
                  type="search"
                  className="outline-none text-md w-full placeholder-shown:font-normal font-medium text-gray-600"
                  placeholder="Search free high-resolution photos"
                />
              </form>
            </div>
          </div>
          <div className="p-5 pt-0">
            <p className="text-gray-100 text-sm"><a className="text-white opacity-80 hover:opacity-100" href={`/photos/${photo?.id}`}>Photo</a> by <a className="text-white opacity-80 hover:opacity-100" href={`/user/${photo?.user.username}`}>{photo?.user.name}</a></p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
