import React from "react";
import { fetcher, startCase } from "@utils/helpers";
import { useRouter } from "next/router";
import useSWR from "swr";
import InfiniteGrid from "@components/InfiniteGrid";

const SearchPhotos = () => {
  const router = useRouter();
  const { query } = router.query;
  const [page, setPage] = React.useState(1);
  const { data, error, isValidating } = useSWR(
    `/api/s/photos/${query}?page=${page}`,
    fetcher
  );
  const [searchData, setSearchData] = React.useState({
    results: [],
    total: 0,
  });

  const nextPage = () => {
    setPage((ps) => ps + 1);
  };
 
  React.useEffect(() => {
    if (!data || error) return;
    setSearchData((pS) => ({
      results: [...pS.results, ...data.response.results],
      total: data.total,
    }));
  }, [data]);

  return (
    <div className="max-w-[1320px] mx-auto px-0 md:px-4">
      <h1 className="text-3xl mb-12 md:mb-5 font-semibold">
        {startCase(query)}
      </h1>
      <InfiniteGrid
        photosList={searchData.results}
        isValidating={isValidating}
        total={searchData.total}
        nextPage={nextPage}
      />
    </div>
  );
};

export default SearchPhotos;
