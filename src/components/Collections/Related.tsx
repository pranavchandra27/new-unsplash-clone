import React from "react";
import useSWR from "swr";

import { fetcher } from "@utils/helpers";
import RelatedTags from "@components/RelatedTags";
import RelatedCollections from "@components/RelatedCollections";
import { ITagProps } from "typings";

interface Props {
  id: string;
  tags: [ITagProps];
}

const Related = ({ id, tags }: Props) => {
  const { data, error, isValidating } = useSWR(
    `/api/collections/related?id=${id}`,
    fetcher
  );

  if (!data) return <p>Loading...</p>;
  return (
    <div>
      <RelatedCollections loading={isValidating} collections={data.response} />

      <RelatedTags tags={tags} />
    </div>
  );
};

export default Related;
