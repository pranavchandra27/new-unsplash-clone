import React from "react";
import { ICollectionProps } from "typings";
import Collection from "@components/Collections/Collection";

interface Props {
  collections: ICollectionProps[];
  loading?: boolean;
}

const Related = ({ collections, loading }: Props) => {
  return (
    <div className="mt-20">
      <div className="max-w-[1320px] mx-auto overflow-hidden px-4">
        <h3 className="text-xl text-gray-700 mb-8">Related collections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {!loading && collections.length > 0 ? (
            collections.map((collection: ICollectionProps) => (
              <Collection key={collection.id} collection={collection} />
            ))
          ) : (
            <>
              <div>
                <div className="animate-pulse w-full h-72 bg-gray-100 rounded-md"></div>
                <div className="animate-pulse w-2/3 h-5 bg-gray-100 rounded mt-4"></div>
                <div className="animate-pulse w-2/5 h-5 bg-gray-100 rounded mt-4"></div>
              </div>
              <div>
                <div className="animate-pulse w-full h-72 bg-gray-100 rounded-md"></div>
                <div className="animate-pulse w-2/3 h-5 bg-gray-100 rounded mt-4"></div>
                <div className="animate-pulse w-2/5 h-5 bg-gray-100 rounded mt-4"></div>
              </div>
              <div>
                <div className="animate-pulse w-full h-72 bg-gray-100 rounded-md"></div>
                <div className="animate-pulse w-2/3 h-5 bg-gray-100 rounded mt-4"></div>
                <div className="animate-pulse w-2/5 h-5 bg-gray-100 rounded mt-4"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Related;
