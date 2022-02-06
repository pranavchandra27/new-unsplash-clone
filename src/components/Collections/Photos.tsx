import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWRInfintie from "swr/infinite";
import { fetcher, uniqArray } from "@utils/helpers";
import { IPhotoProps } from "typings";
import GridContainer from "@components/GridContainer";
import Photo from "@components/Photos/Photo";
import Spinner from "@components/Spinner";

interface Props {
  id: string;
}

const Photos = ({ id }: Props) => {
  const [photos, setPhotos] = useState<IPhotoProps[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const { data, error, isValidating } = useSWRInfintie(
    () => `/api/collections/photos?id=${id}&page=${page}`,
    fetcher
  );

  useEffect(() => {
    if (!data || error) return;
    setPhotos((prevPhotos) =>
      uniqArray([...prevPhotos, ...data[0].response.results])
    );
    if(total === 0) {
      setTotal(data[0].response.total);
    }
  }, [data]);

  if (error) return <p>Error Occured</p>;
  return (
    <div className="overflow-hidden">
      {total > 0 && <h2 className="mt-2 mb-8">{total} photos</h2>}

      {/* <InfiniteScroll
        dataLength={photos.length}
        hasMore={total !== photos.length}
        next={nextPage}
        loader={""}
      > */}
      <GridContainer>
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </GridContainer>
      {/* </InfiniteScroll> */}

      {total > 30 && (
        <div className="flex justify-center mb-5">
          <button
            onClick={() => setPage(prevPage => prevPage + 1)}
            disabled={isValidating}
            className="text-gray-500 text-lg border flex border-gray-300 hover:text-gray-700 hover:border-gray-700 rounded  px-5 py-3"
          >
            {isValidating && (
              <span className="mr-2">
                <Spinner />
              </span>
            )}
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Photos;
