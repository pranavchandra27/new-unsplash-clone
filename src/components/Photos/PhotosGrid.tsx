import { useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWRInfinite from "swr/infinite";

import { changePage, setPhotosData } from "@context/actions";
import { useData } from "@context/provider";
import Photo from "./Photo";
import GridContainer from "@components/GridContainer";
import { fetcher } from "@utils/helpers";
import { StateProps } from "typings";
import Spinner from "@components/Spinner";

const PhotosGrid = () => {
  const initialRender = useRef(true);
  const {
    state: {
      photosData: { results: photosList, total },
      loading,
      page,
    },
    dispatch,
  }: StateProps = useData();
  const { data, error, isValidating } = useSWRInfinite(
    () => (page === 1 && initialRender ? null : `/api/photos?page=${page}`),
    fetcher
  );

  const nextPage = () => {
    const newPage = page + 1;
    changePage(newPage)(dispatch);
  };

  useEffect(() => {
    if (!data || error) return;
    setPhotosData(data[0].response)(dispatch);

    if (initialRender) {
      initialRender.current = false;
    }
  }, [data]);

  return (
    <div className="max-w-[1320px] mx-auto overflow-hidden px-0 sm:px-4">
      <InfiniteScroll
        dataLength={photosList.length}
        hasMore={total > photosList.length}
        next={nextPage}
        loader={""}
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
