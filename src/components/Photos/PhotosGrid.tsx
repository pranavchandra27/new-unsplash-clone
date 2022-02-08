import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWRInfinite from "swr/infinite";

import { changePage, setPhotosData } from "@context/actions";
import { useData } from "@context/provider";
import Photo from "./Photo";
import GridContainer from "@components/GridContainer";
import { fetcher } from "@utils/helpers";
import { StateProps } from "typings";

const PhotosGrid = () => {
  const {
    state: {
      photosData: { results: photosList, total },
      page,
    },
    dispatch,
  }: StateProps = useData();

  const { data, error, isValidating } = useSWRInfinite(
    () => `/api/photos?page=${page}`,
    fetcher
  );

  const nextPage = () => {
    const newPage = page + 1;
    changePage(newPage)(dispatch);
  };

  useEffect(() => {
    if (!data || error) return;
    setPhotosData(data[0].response)(dispatch);
  }, [data]);

  return (
    <div className="max-w-[1320px] mx-auto px-0 md:px-4">
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
    </div>
  );
};

export default PhotosGrid;
