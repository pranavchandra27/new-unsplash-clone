import React from "react";
import Link from "next/link";
import TagRenderer from "@components/TagRenderer";

const Collection = (props) => {
  const {
    preview_photos,
    id,
    title,
    total_photos,
    tags,
    user: { name },
  } = props;
  return (
    <div className="collection-card">
      <Link href={`/collections/${id}`}>
        <div className="h-72 rounded-md overflow-hidden relative collection">
          <div className="collection-shadow transition-all duration-300 ease-in-out absolute left-0 top-0 w-full h-full bg-white bg-opacity-20 cursor-pointer" />
          <div className="flex h-full">
            <div className="overflow-hidden left">
              <img
                role="presentation"
                className="h-full w-full object-cover"
                src={preview_photos[0].urls.small}
                alt={preview_photos[0].alt_description}
              />
            </div>
            <div className="overflow-hidden h-full ml-0.5 right">
              <div className="h-1/2 mb-0.5">
                <img
                  role="presentation"
                  className="h-full w-full object-cover"
                  src={preview_photos[1].urls.small}
                  alt={preview_photos[1].alt_description}
                />
              </div>
              <div className="h-1/2">
                <img
                  role="presentation"
                  className="h-full w-full object-cover"
                  src={preview_photos[2].urls.small}
                  alt={preview_photos[2].alt_description}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <Link href={`/collections/${id}`}>
          <h2 className="title text-lg font-semibold cursor-pointer">
            {title}
          </h2>
        </Link>
        <p className="text-gray-500 text-sm">
          {total_photos} photos • Curated by {name}
        </p>
        <div className="mt-3 flex -ml-2">
          {tags.slice(0, 3).map((tag) => (
            <TagRenderer key={tag.title} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
