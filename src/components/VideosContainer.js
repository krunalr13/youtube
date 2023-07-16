import { useState, useEffect, useRef, useCallback } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");

  const observerTarget = useRef(null);

  const getVideosData = async () => {
    const options = {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      maxResults: 48,
      regionCode: "IN",
      videoCategoryId: "1",
      key: YOUTUBE_API_KEY,
    };

    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?" +
        new URLSearchParams(options)
    );
    const videosData = await response.json();
    setPageToken(videosData?.nextPageToken);
    setVideos(videosData.items);
  };

  let options2 = {
    part: "snippet,contentDetails,statistics",
    chart: "mostPopular",
    maxResults: 20,
    regionCode: "IN",
    videoCategoryId: "1",
    key: YOUTUBE_API_KEY,
  };

  const getMoreVideosData = async () => {
    if (!pageToken) {
      return;
    }
    options2 = { ...options2, pageToken };

    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?" +
        new URLSearchParams(options2)
    );
    const videosData = await response.json();
    console.log("videosData", videosData);
    setPageToken(videosData?.nextPageToken);
    setVideos((prev) => [...prev, ...videosData.items]);
  };

  useEffect(() => {
    getVideosData();
  }, []);

  const handleObserver = (entries) => {
    if (entries[0].isIntersecting) {
      getMoreVideosData();
    }
  };

  useEffect(() => {
    console.log("useEffect2");

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 1,
    });

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  return (
    <div className="grid grid-cols-4 p-4">
      {videos.map((video) => (
        <div key={video.id} className="p-4 m-4 w-full max-sm:w-96 max-sm:h-96">
          <img
            src={video.snippet.thumbnails.high.url}
            alt="thumbnail"
            className="w-full rounded-md hover:rounded-none"
          />
          <ul>
            <li className="font-bold">{video.snippet.localized.title}</li>
            <li>{video.snippet.channelTitle}</li>
            <li>{video.statistics.viewCount} views</li>
          </ul>
        </div>
      ))}

      <div ref={observerTarget}></div>
    </div>
  );
};

export default VideosContainer;
