import Hero from "@components/Hero";
import PhotosGrid from "@components/Photos/PhotosGrid";
import Head from "next/head";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Unsplash Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <PhotosGrid />
    </div>
  );
}
