import React, { FC } from "react";
import Link from "next/link";
import { AiFillHeart, AiOutlinePlus } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import { IoIosShareAlt, IoMdInformationCircle } from "react-icons/io";
import {
  IoLocationSharp,
  IoCalendarClearOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import useNextBlurhash from "use-next-blurhash";

import { timeSince, breakpoints } from "@utils/helpers";
import Dropdown from "@components/Dropdown";
import useWindowSize from "src/hooks/useWindowSize";
import RelatedCollections from "@components/RelatedCollections";
import RelatedTags from "@components/RelatedTags";
import { IPhotoProps } from "typings";

interface ModalContentProps {
  photo: IPhotoProps;
}

const ModalContent: FC<ModalContentProps> = ({ photo }) => {
  const [width] = useWindowSize();
  const [blurDataUrl] = useNextBlurhash(photo.blur_hash);

  return (
    photo && (
      <div>
        <div className="flex justify-between items-center mb-2 p-4 pb-0">
          <Link href={`/user/${photo.user.username}`}>
            <div className="flex items-center leading-none cursor-pointer">
              <span className="rounded-full overflow-hidden ring-1 ring-gray-400 ring-opacity-50">
                <img
                  className="w-8 h-8 bg-gray-500"
                  src={photo.user.profile_image.small}
                  alt={photo.user.name}
                />
              </span>
              <div className="ml-2">
                <h3 className="text-md text-gray-700">{photo.user.name}</h3>
                <p className="text-sm text-blue-500">{photo.user.username}</p>
              </div>
            </div>
          </Link>

          <div className="flex items-center">
            <button className="shadow-sm transition-colors duration-300 ease-in-out py-1.5 px-2.5 rounded mr-2.5 text-gray-500 hover:text-gray-900 border border-gray-300 hover:border-gray-500">
              <AiFillHeart size={16} />
            </button>

            <button className="shadow-sm transition-colors duration-300 ease-in-out py-1.5 px-2.5 rounded text-gray-500 hover:text-gray-900 border border-gray-300 hover:border-gray-500">
              <AiOutlinePlus size={16} />
            </button>

            <div className="flex ml-2.5">
              <button className="shadow-sm transition-colors duration-300 ease-in-out text-sm px-2.5 py-0.5 flex items-center text-gray-500 hover:text-gray-900 rounded-l border border-gray-300 hover:border-gray-500">
                Download
              </button>
              <button className="shadow-sm download relative transition-colors duration-300 ease-in-out px-1.5 py-0.5 flex items-center text-gray-500 hover:text-gray-900 rounded-r border border-gray-300 hover:border-gray-500">
                <HiChevronDown size={26} />
                <Dropdown
                  urls={photo.urls}
                  dimensions={{ width: photo.width, height: photo.height }}
                />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${
            width > breakpoints.sm ? "p-4" : "py-4"
          } grid place-items-center`}
        >
          <div
            style={{
              background: `url(${blurDataUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <img
              className="max-h-[80vh] min-h-[500px]"
              src={photo.urls.regular}
              alt={photo.alt_description}
            />
          </div>
        </div>

        <div className="mt-4 px-4 flex items-start">
          <div className="md:flex w-2/5 md:max-w-xs justify-between">
            <div className="text-left">
              <p className="text-gray-500 text-sm">Veiws</p>
              <p className="text-md">{photo.views.toLocaleString()}</p>
            </div>
            <div className="text-left">
              <p className="text-gray-500 text-sm">Downloads</p>
              <p className="text-md">{photo.downloads.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex flex-1 justify-end">
            <div>
              <button className="transition-colors duration-300 ease-in shadow-sm text-md px-2.5 py-1 flex items-center text-gray-500 hover:text-gray-900 ring-1 ring-gray-300 rounded-sm hover:ring-gray-600 mr-2.5">
                <span className="text-lg mr-1">
                  <IoIosShareAlt />
                </span>
                <span className="">Share</span>
              </button>
            </div>
            <div>
              <button className="transition-colors duration-300 ease-in shadow-sm text-md px-2.5 py-1 flex items-center text-gray-500 hover:text-gray-900 ring-1 ring-gray-300 rounded-sm hover:ring-gray-600">
                <span className="text-lg mr-1">
                  <IoMdInformationCircle />
                </span>
                <span className="">Info</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 px-4">
          {photo.location.title && (
            <div className="flex text-gray-500 items-center">
              <span className="text-md text-md mr-2">
                <IoLocationSharp />
              </span>
              <p className="text-sm">{photo.location.title}</p>
            </div>
          )}
          <div className="flex text-gray-500 items-center mt-2">
            <span className="text-md text-md mr-2">
              <IoCalendarClearOutline />
            </span>
            <p className="text-sm">
              Published {timeSince(photo.created_at)} ago
            </p>
          </div>
          <div className="flex text-gray-500 items-center mt-2">
            <span className="text-md text-md mr-2">
              <IoShieldCheckmarkOutline />
            </span>
            <p className="text-sm">Free to use under unsplash license.</p>
          </div>
        </div>
        <RelatedCollections collections={photo.related_collections.results} />
        <RelatedTags tags={photo.tags} />
      </div>
    )
  );
};

export default ModalContent;
