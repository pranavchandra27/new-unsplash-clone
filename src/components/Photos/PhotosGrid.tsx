import { useEffect, useState } from "react";
import { setPhotosData } from "@context/actions";
import { useData } from "@context/provider";
import Photo from "./Photo";
import InfiniteScroll from "@components/InfiniteScroll";

const PhotosGrid = () => {
  const [loading, setLoading] = useState(true);
  const {
    state: {
      photosData: { results: photosList, total },
      page,
    },
    dispatch,
  } = useData();

  useEffect(() => {
    (async () => {
      let data = {
        page,
      };
      try {
        const res = await fetch("/api/photos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const { response } = await res.json();

        setPhotosData(response)(dispatch);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert(JSON.stringify(error));
      }
    })();
  }, []);

  return (
    <div className="my-container">
      <InfiniteScroll
        hasMore={photosList.lenght !== total}
        loader={<h1 className="text-xl text-red-500">Loading...</h1>}
        dataLength={photosList.length}
        next={() => { }}
        children={photosList}
      />
    </div>
  );
};

export default PhotosGrid;
