import Hero from "@components/Hero";
import PhotosGrid from "@components/Photos/PhotosGrid";
import { setPhotosData } from "@context/actions";
import { useData } from "@context/provider";
import { server } from "config";
import Head from "next/head";
import { useEffect, useRef } from "react";

import { StateProps } from "typings";

export default function Home({photos}) {
  const initialRender = useRef(true)
  const {dispatch}:StateProps = useData()
  

  useEffect(() => {
    if(initialRender) {
      setPhotosData(photos)(dispatch)
      initialRender.current = false
    }
  },[])

  return (
    <div>
      <Head>
        <title>Splash - Download free photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <PhotosGrid />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${server}/api/photos?page=1&perPage=30`);
  const { response } = await res.json();

  return {
    props:{photos: response}
  }
  
} 