import React from "react";
import Link from "next/link";
import TagRenderer from "@components/TagRenderer";
import { ICollectionProps } from "typings";

interface Props {
  collection: ICollectionProps;
}

const Collection = ({ collection }: Props) => {
  return (
    <div>
      <span className="group">
        <Link href={`/collections/${collection.id}`}>
          <div className="h-72 rounded-md overflow-hidden relative collection">
            <div className="hidden group-hover:block transform transition-transform duration-300 ease-in-out absolute left-0 top-0 w-full h-full bg-white bg-opacity-20 cursor-pointer" />
            <div className="flex h-full">
              <div className="overflow-hidden w-[70%]">
                <img
                  role="presentation"
                  className="h-full w-full object-cover"
                  src={collection.preview_photos[0].urls.small}
                  alt={collection.preview_photos[0].alt_description}
                />
              </div>
              <div className="overflow-hidden h-full ml-0.5 w-[30%]">
                <div className="h-1/2 mb-0.5">
                  <img
                    role="presentation"
                    className="h-full w-full object-cover"
                    src={collection.preview_photos[1].urls.small}
                    alt={collection.preview_photos[1].alt_description}
                  />
                </div>
                <div className="h-1/2">
                  <img
                    role="presentation"
                    className="h-full w-full object-cover"
                    src={collection.preview_photos[2].urls.small}
                    alt={collection.preview_photos[2].alt_description}
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="mt-3">
          <Link href={`/collections/${collection.id}`}>
            <h2 className="w-full text-lg font-semibold cursor-pointer">
              {collection.title}
            </h2>
          </Link>
        </div>
      </span>
      <div className="mt-1">
        <p className="text-gray-500 text-sm">
          {collection.total_photos} photos • Curated by {collection.user.name}
        </p>
        <div className="mt-3 flex flex-wrap -ml-2">
          {collection.tags.slice(0, 3).map((tag) => (
            <TagRenderer key={tag.title} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
