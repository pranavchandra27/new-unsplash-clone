import { fetcher } from "@utils/helpers";
import React from "react";
import useSWR from "swr/infinite";

interface Props {
  id: string;
}

const Photos = ({ id }: Props) => {
  const { data, error, isValidating, size, setSize } = useSWR(
    (index) => `/api/users/photos?id=${id}&page=${index + 1}`,
    fetcher
  );

  return <div></div>;
};

export default Photos;
