import { useEffect } from "react";
import useSWRInfinite from "swr/infinite";

import { changePage, setPhotosData } from "@context/actions";
import { useData } from "@context/provider";
import { fetcher } from "@utils/helpers";
import { StateProps } from "typings";
import InfiniteGrid from "@components/InfiniteGrid";

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
      <InfiniteGrid
        results={photosList}
        nextPage={nextPage}
        isValidating={isValidating}
        total={total}
      />
    </div>
  );
};

export default PhotosGrid;
