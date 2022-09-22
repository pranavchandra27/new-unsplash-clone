import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import GridContainer from "./GridContainer";
import Photo from "./Photos/Photo";

type Props = {
  photosList: any[];
  nextPage: () => void;
  isValidating: boolean;
  total: number;
};

const InfiniteGrid: React.FC<Props> = ({
  photosList,
  nextPage,
  total,
  isValidating,
}) => {
  return (
    <InfiniteScroll
      dataLength={photosList.length}
      next={nextPage}
      hasMore={total !== photosList.length}
      loader={
        isValidating ? <div className="text-center">Loading...</div> : <p></p>
      }
    >
      <GridContainer>
        {photosList.map((photo: any) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </GridContainer>
    </InfiniteScroll>
  );
};

export default InfiniteGrid;
