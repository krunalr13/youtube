import { useEffect, useState, useRef } from "react";

const useInfiniteScroll = (getMoreVideosData, observerTarget) => {
  const [fetching, setFetching] = useState(false);

  const handleObserver = (entries) => {
    if (!fetching) return;

    if (entries[0].isIntersecting) {
      getMoreVideosData();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 1,
    });

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
      setFetching(true);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, fetching]);

  return setFetching;
};

export default useInfiniteScroll;
