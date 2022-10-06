import { useRouter } from "next/router";
import React, { FC } from "react";
import {
  MdOutlinePhotoSizeSelectActual,
  MdOutlineCollections,
} from "react-icons/md";

const Tabs = () => {
  const { route, push, query } = useRouter();

  return (
    <div className="sticky top-0">
      <div className="flex items-center mt-4">
        <div
          onClick={() => push(`/s/photos/${query.query}`)}
          className={`flex items-center relative cursor-pointer ml-5 ${
            route.includes("photos") ? "text-black" : `text-gray-500`
          } hover:text-black`}
        >
          {route.includes("photos") && (
            <div className="absolute top-[35px] rounded left-0 h-[2px] w-full bg-gray-600" />
          )}
          <span>
            <MdOutlinePhotoSizeSelectActual />
          </span>
          <span className="text-md ml-2">Photos</span>
        </div>
        <div
          onClick={() => push(`/s/collections/${query.query}`)}
          className={`flex items-center ml-5 relative cursor-pointer ${
            route.includes("collections") ? "text-black" : `text-gray-500`
          } hover:text-black`}
        >
          {route.includes("collections") && (
            <div className="absolute top-[35px] rounded left-0 h-[2px] w-full bg-gray-600" />
          )}
          <span>
            <MdOutlineCollections />
          </span>
          <span className="text-md ml-2">Collections</span>
        </div>
      </div>
      <div className="border-b-2 border-gray-200 w-full h-[1px] mt-3" />
    </div>
  );
};

export default Tabs;
