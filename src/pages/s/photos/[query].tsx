import React from "react";
import { fetcher, startCase } from "@utils/helpers";
import { useRouter } from "next/router";
import useSWR from "swr";

import InfiniteGrid from "@components/InfiniteGrid";
import Tabs from "@components/Tabs";
import { useData } from "@context/provider";
import { StateProps } from "typings";
import { setSearchPhotos } from "@context/actions";

const SearchPhotos = () => {
  const router = useRouter();
  const {
    state: { searchPhotos },
    dispatch,
  }: StateProps = useData();
  const { query } = router.query;
  const [page, setPage] = React.useState(1);
  const { data, error, isValidating } = useSWR(
    `/api/s/photos/${query}?page=${page}`,
    fetcher
  );
  const [total, setTotal] = React.useState(0);

  const nextPage = () => {
    setPage((ps) => ps + 1);
  };

  React.useEffect(() => {
    if (!data || error) return;
    setSearchPhotos([...searchPhotos, ...data.response.results])(dispatch);
    setTotal(data.response.total);
  }, [data, query]);

  return (
    <>
      <Tabs />
      <div className="max-w-[1320px] mx-auto px-0 md:px-4 mt-5">
        <h1 className="text-3xl mb-12 md:mb-5 font-semibold">
          {startCase(query)}
        </h1>
        <InfiniteGrid
          results={searchPhotos}
          isValidating={isValidating}
          total={total}
          nextPage={nextPage}
        />
      </div>
    </>
  );
};

export default SearchPhotos;
