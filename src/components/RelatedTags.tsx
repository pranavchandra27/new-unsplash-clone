import React from "react";
import { ITagProps } from "typings";
import TagRenderer from "./TagRenderer";

interface Props {
  tags: [ITagProps];
  loading?: boolean;
}

const RelatedTags = ({ tags, loading }: Props) => {
  return (
    <div className="my-20">
      <div className="max-w-[1320px] mx-auto overflow-hidden px-4">
        <h3 className="text-xl text-gray-700 mb-8">Related Tags</h3>
        <div className="flex flex-wrap overflow-hidden -ml-2 -mb-2">
          {!loading && tags && tags.length > 0 ? (
            tags.map((tag: ITagProps) => (
              <TagRenderer tag={tag} key={tag.title} />
            ))
          ) : (
            <>
              <div className="animate-pulse w-28 h-6 bg-gray-100 mr-2 mb-2"></div>
              <div className="animate-pulse w-32 h-6 bg-gray-100 mr-2 mb-2"></div>
              <div className="animate-pulse w-28 h-6 bg-gray-100 mr-2 mb-2"></div>
              <div className="animate-pulse w-26 h-6 bg-gray-100 mr-2 mb-2"></div>
              <div className="animate-pulse w-24 h-6 bg-gray-100 mr-2 mb-2"></div>
              <div className="animate-pulse w-28 h-6 bg-gray-100 mr-2 mb-2"></div>
              <div className="animate-pulse w-32 h-6 bg-gray-100 mr-2 mb-2"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RelatedTags;
