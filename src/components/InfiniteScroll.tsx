import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import throttle from "lodash/throttle";
import { List, AutoSizer } from "react-virtualized";

import Photo from "@components/Photos/Photo";

type InfiniteScrollProps = {
  hasMore: boolean;
  next: VoidFunction;
  dataLength: number;
  loader: ReactElement;
  children: any;

};

const InfiniteScroll: FC<InfiniteScrollProps> = (props) => {
  const { hasMore, next, dataLength, loader, children } = props;
  const [showLoader, setShowLoader] = useState(false);
  let triggered = useRef(false);

  useEffect(() => {
    triggered.current = false;
    setShowLoader(false);
  }, [dataLength]);




  const refProps = useRef({
    next,
    hasMore,
  });

  const scrollListener = useCallback((e) => {
    const { next, hasMore } = refProps.current;


    const { clientHeight, scrollHeight, scrollTop } = e.target;
    console.log(e)

    if (triggered.current) {
      return;
    }

    const atBottom = scrollTop + clientHeight >= scrollHeight;

    if (atBottom && hasMore) {
      triggered.current = true;
      setShowLoader(true);
      next && next();
    }

  }, []);

  useEffect(() => {
    refProps.current = {
      next,
      hasMore,
    };
  }, [next, hasMore]);

  const throttleScrollListener = throttle(scrollListener, 150);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', throttleScrollListener)
      return () => window.removeEventListener('scroll', throttleScrollListener)
    }
  }, [throttleScrollListener])

  const isLoaderVisible = showLoader && hasMore;

  return (
    <div style={{ position: "relative" }} >
      <div className="grid__container px-3" >
        {children.map((photo: any) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
      <div
        style={{
          visibility: isLoaderVisible ? "visible" : "hidden",
          position: isLoaderVisible ? "static" : "absolute",
          border: 0,
          willChange: "scroll-position",
        }}
      >
        {loader}
      </div>
    </div>
  );
};

export default InfiniteScroll;
