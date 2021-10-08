import React from "react";
import Link from "next/dist/client/link";

const TagRenderer = ({ tag }) => {
  return (
    <div className="pl-2 pb-2">
      <Link key={tag.title} href={`/s/photos/${tag.title}`}>
        <div className="tag px-1.5 cursor-pointer rounded-sm  text-gray-500 hover:text-gray-700">
          <p className="capitalize  text-opacity-70">{tag.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default TagRenderer;
