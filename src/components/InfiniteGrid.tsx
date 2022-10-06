import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ICollectionProps } from "typings";
import Collection from "./Collections/Collection";
import GridContainer from "./GridContainer";
import Photo from "./Photos/Photo";

type Props = {
  results: any[];
  nextPage: () => void;
  isValidating: boolean;
  total: number;
  type?: string;
};

const InfiniteGrid: React.FC<Props> = ({
  results,
  nextPage,
  total,
  isValidating,
  type,
}) => {
  return (
    <InfiniteScroll
      dataLength={results.length}
      next={nextPage}
      hasMore={total !== results.length}
      loader={
        isValidating ? <div className="text-center">Loading...</div> : <p></p>
      }
    >
      {type === "photos" || !type ? (
        <GridContainer>
          {results.map((photo: any) => (
            <Photo key={photo.id} photo={photo} />
          ))}
        </GridContainer>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {results.map((collection: ICollectionProps) => (
            <Collection key={collection.share_key} collection={collection} />
          ))}
        </div>
      )}
    </InfiniteScroll>
  );
};

export default InfiniteGrid;
