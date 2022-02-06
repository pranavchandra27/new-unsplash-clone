import Hero from "@components/Hero";
import PhotosGrid from "@components/Photos/PhotosGrid";
import Head from "next/head";

export default function Home({ photos }) {
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
