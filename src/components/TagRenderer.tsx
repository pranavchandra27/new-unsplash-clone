import React from "react";
import Link from "next/dist/client/link";
import { ITagProps } from "typings";

interface Props {
  tag: ITagProps
}

const TagRenderer = ({ tag }:Props) => {
  return (
    <div className="pl-2 pb-2">
      <Link key={tag.title} href={`/s/photos/${tag.title}`}>
        <div className="px-2 py-[3px] cursor-pointer rounded-sm bg-[#eee] hover:bg-[#ddd] text-gray-500 hover:text-gray-700">
          <p className="capitalize text-opacity-70 text-sm">{tag.source ? tag.source.title : tag.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default TagRenderer;
