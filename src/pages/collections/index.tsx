import React, { useEffect, useRef } from "react";
import { server } from "config";
import { ICollectionProps, IResponse, StateProps } from "typings";
import Collection from "@components/Collections/Collection";
import InfiniteScroll from "react-infinite-scroll-component";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "@utils/helpers";
import { useData } from "@context/provider";
import { changeCollectionPage, setCollections } from "@context/actions";

interface Props {
  collectionsData: IResponse;
}

const Collections = ({ collectionsData }: Props) => {
  const initialRender = useRef(true);
  const {
    state: {
      collectionPage,
      collections: { results: collections, total },
    },
    dispatch,
  }: StateProps = useData();

  const { data, error, isValidating } = useSWRInfinite(
    () =>
      collectionPage === 1 && initialRender
        ? null
        : `/api/collections?page=${collectionPage}`,
    fetcher
  );

  useEffect(() => {
    if (initialRender) {
      setCollections(collectionsData)(dispatch);
      initialRender.current = false;
    }
  }, []);

  useEffect(() => {
    if (!data || error) return;
    setCollections(data[0].response)(dispatch);
  }, [data]);

  const nextPage = () => {
    const newPage = collectionPage + 1;
    changeCollectionPage(newPage)(dispatch);
  };

  return (
    <div className="max-w-[1320px] mx-auto p-4">
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

      <InfiniteScroll
        dataLength={collections.length}
        hasMore={total !== collections.length}
        next={nextPage}
        loader={isValidating && <p>Loading...</p>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
          {collections.map((collection: ICollectionProps) => (
            <Collection key={collection.share_key} collection={collection} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Collections;

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/collections?page=1&perPage=30`);
  const { response } = await res.json();

  return {
    props: { collectionsData: response },
  };
};
