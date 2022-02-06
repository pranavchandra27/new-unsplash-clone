import Photos from "@components/User/Photos";
import { fetcher } from "@utils/helpers";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import { IUserType } from "typings";
import { IoLocationSharp, IoCheckmarkCircle } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import CustomDropdown from "@components/CustomDropdown";
import TagRenderer from "@components/TagRenderer";

const User = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isValidating } = useSWR(`/api/users/${id}`, fetcher);

  if (!data) return <p>Loading...</p>;

  const user: IUserType = data.response;

  return (
    <div className="mt-10">
      <Photos id={id?.toString()} />
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:flex-[0.3]">
            <div>
              <img
                className="md:ml-auto md:mr-8 w-[150px] h-[150px] rounded-full ring-1 ring-gray-300"
                src={user.profile_image.large}
                alt={user.name}
              />
            </div>
          </div>
          <div className="md:flex-[0.7] max-w-full lg:max-w-xl">
            <div className="md:pl-6">
              <h1 className="font-bold mt-5 md:mt-0 text-xl md:text-4xl">{user.name}</h1>
              <p className="mt-4">{user.bio}</p>
              <div>
                {user.for_hire && (
                  <p className="mt-5 flex items-center text-[#007fff]">
                    <span className="mr-1">
                      <IoCheckmarkCircle />
                    </span>
                    Available for hire
                  </p>
                )}
                <p className="flex items-center mt-2 text-gray-500">
                  <span className="mr-1">
                    <IoLocationSharp />
                  </span>
                  {user.location}
                </p>
                <button className="mt-2 text-gray-500 flex items-center hover:text-gray-800">
                  <span className="inline-flex mr-1" >
                    <AiOutlineLink fontSize={16} />
                  </span>{" "}
                  Connect with {user.first_name}
                  <span className="inline-flex mr-1" >
                    <MdArrowDropDown fontSize={28} />
                  </span>{" "}
                </button>

                <div className="mt-4">
                  <h4>Interests</h4>

                  <div className="flex flex-wrap overflow-hidden -ml-2 -mb-2 mt-4">
                    {user.tags.custom.map((tag) => (
                      <TagRenderer key={tag.title} tag={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
