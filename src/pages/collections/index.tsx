import React, { useEffect } from "react";
import { StateProps } from "typings";
import useSWRInfinite from "swr/infinite";

import { fetcher } from "@utils/helpers";
import { useData } from "@context/provider";
import { changeCollectionPage, setCollections } from "@context/actions";
import InfiniteGrid from "@components/InfiniteGrid";

const Collections = () => {
  const {
    state: {
      collectionPage,
      collections: { results: collections, total },
    },
    dispatch,
  }: StateProps = useData();

  const { data, error, isValidating } = useSWRInfinite(
    () => `/api/collections?page=${collectionPage}`,
    fetcher
  );

  useEffect(() => {
    if (!data || error) return;
    setCollections(data[0].response)(dispatch);
  }, [data]);

  const nextPage = () => {
    const newPage = collectionPage + 1;
    changeCollectionPage(newPage)(dispatch);
  };

  return (
    <div className="max-w-[1320px] mx-auto px-4">
      <div className="py-12 md:pt-[60px] md:pb-[72px]">
        <h1 className="font-semibold text-2xl md:text-5xl">Collections</h1>
        <div className="w-full md:w-2/3 lg:w-2/4 mt-4 font-normal md:font-medium text-base md:text-lg">
          <h1>Beautiful, free pictures of the week.</h1>
          <h2>
            Explore the world through collections of beautiful HD pictures free
            to use under the{" "}
            <span className="text-gray-500 underline cursor-pointer hover:text-gray-700">
              Unsplash License
            </span>
            .
          </h2>
        </div>
      </div>

      <InfiniteGrid
        results={collections}
        total={total}
        nextPage={nextPage}
        type="collections"
        isValidating={isValidating}
      />
    </div>
  );
};

export default Collections;
