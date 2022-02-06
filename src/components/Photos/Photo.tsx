import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";
import { AiFillHeart, AiOutlinePlus, AiOutlineArrowDown } from "react-icons/ai";

import { IPhotoProps } from "typings";

interface PhotoProps {
  photo: IPhotoProps;
}

const Photo: FC<PhotoProps> = ({ photo }) => {
  const [blurDataUrl] = useNextBlurhash(photo.blur_hash)

  /**
   * 
   * @param h full height of the photo
   * @param w full with of the photo
   * @returns it will return a height and ratio according to the given width proportional
   */
  const calculateRatio = (
    h: number,
    w: number
  ): { height: number; percent: number } => {
    const percent = (416 / w) * 100;
    const height = Math.floor(h * (percent / 100));
    return {
      height,
      percent,
    };
  }

  return (
    <Link href={`/photos/${photo.id}`}>
      <div
        className={`box-border group cursor-[zoom-in] mb-5 w-full`}
        style={{
          backgroundColor: photo.color
        }}
      >
        <div className="relative">
          <div className="sm:group-hover:block hidden shadow-inner absolute h-full w-full top-0 bottom-0 right-0 left-0 z-50">
            <div className="flex h-full flex-col justify-between p-5">
              <div className="flex w-full justify-end relative">
                <button className="text-gray-600 text-xl hover:text-gray-900 bg-white bg-opacity-80 hover:bg-opacity-100 py-1.5 px-2.5 rounded mr-2.5">
                  <AiFillHeart />
                </button>

                <button className="text-gray-600 text-xl hover:text-gray-900 bg-white bg-opacity-80 hover:bg-opacity-100 py-1.5 px-2.5 rounded">
                  <AiOutlinePlus />
                </button>
              </div>
              <div className="flex w-full justify-between items-center">
                <div className="flex">
                  <Link href={`/users/${photo.user.username}`}>
                    <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
                      <img
                        src={photo.user.profile_image.small}
                        alt={photo.user.name}
                      />
                    </div>
                  </Link>
                  <div className="leading-none ml-2">
                    <Link href={`/users/${photo.user.username}`}>
                      <h3 className="text-sm leading-none text-gray-100 text-opacity-80 hover:text-opacity-100 cursor-pointer">
                        {photo.user.name}
                      </h3>
                    </Link>

                    <Link href={`/users/${photo.user.username}`}>
                      <p className="text-xs text-gray-100 text-opacity-80 hover:text-opacity-100 cursor-pointer">
                        {photo.user.username}
                      </p>
                    </Link>
                  </div>
                </div>
                <div>
                  <button className="bg-white bg-opacity-80 hover:bg-opacity-100 py-1.5 px-2.5 rounded">
                    <span className="text-gray-600 text-xl hover:text-gray-900">
                      <AiOutlineArrowDown />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Image
            className="w-full"
            loading='eager'
            src={photo.urls.small}
            alt={photo.alt_description}
            width={416}
            height={calculateRatio(photo.height, photo.width).height}
            layout='responsive'
            blurDataURL={blurDataUrl}
          />
        </div>
      </div>
    </Link>
  );
};

export default Photo;
