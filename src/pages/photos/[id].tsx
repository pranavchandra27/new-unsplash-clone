import { useEffect, useState } from "react";
import ModalContent from "@components/Modal/ModalContent";
import PhotoModal from "@components/Modal/PhotoModal";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { server } from "config";
import * as PhotoApi from "unsplash-js/dist/methods/photos/types";

interface Props {
  photo: PhotoApi.Full;
}

const Photo = ({ photo }: Props) => {
  return <ModalContent photo={photo} />;
};

export default Photo;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetch(`${server}/api/photos?page=1&perPage=1000`);
  const { response } = await data.json();

  const paths = response.results.map((photo: PhotoApi.Basic) => ({
    params: {
      id: photo.id,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await fetch(`${server}/api/photos/${params.id}`);
  const { response } = await data.json();

  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      photo: response,
    },
  };
};
