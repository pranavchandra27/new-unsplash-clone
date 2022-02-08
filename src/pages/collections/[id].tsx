import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

import { ICollectionProps } from "typings";
import { fetcher } from "@utils/helpers";
import Photos from "@components/Collections/Photos";
import RelatedCollections from "@components/RelatedCollections";
import Related from "@components/Collections/Related";

const Collection = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isValidating } = useSWR(
    `/api/collections/${id}`,
    fetcher
  );

  if (!data) return <p>Loading...</p>;

  const collection: ICollectionProps = data.response;

  return (
    <div>
      <div
        className="relative"
        style={{
          background: `url(${collection.cover_photo.urls.full}) center no-repeat`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full content-none bg-white opacity-90" />
        <div className="max-w-[1320px] mx-auto px-4 relative">
          <div className="py-12 md:pt-[60px] md:pb-[72px]">
            <div>
              <h1 className="font-bold text-2xl md:text-5xl">
                {collection.title}
              </h1>
              <div className="flex items-center mt-6">
                <img
                  className="rounded-full ring-1 ring-gray-400"
                  src={collection.user.profile_image.small}
                  alt={collection.user.name}
                />
                <Link href={`/users/${collection.user.username}`}>
                  <span className="ml-3 text-gray-500 underline hover:text-gray-700 cursor-pointer">
                    {collection.user.name}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1320px] mx-auto px-0 md:px-4">
        <Photos id={id.toString()} />

        <Related id={id.toString()} tags={collection.tags} />
      </div>
    </div>
  );
};

export default Collection;
