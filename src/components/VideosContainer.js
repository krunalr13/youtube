import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from "../utils/constants";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";

const VideosContainer = () => {
  const [videos, setVideos] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const observerTarget = useRef(null);
  const videoCategory = useSelector((state) => state.app.videoCategory);
  console.log(videoCategory);
  const setFetching = useInfiniteScroll(getMoreVideosData, observerTarget);

  const getVideosData = async () => {
    const options = {
      part: "snippet,contentDetails,statistics",
      chart: "mostPopular",
      maxResults: 48,
      regionCode: "IN",
      videoCategoryId: videoCategory,
      key: YOUTUBE_API_KEY,
    };

    const response = await fetch(
      `${YOUTUBE_API_URL}/videos?${new URLSearchParams(options)}`
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

  async function getMoreVideosData() {
    if (!pageToken) {
      setFetching(false);
      return;
    }
    options2 = { ...options2, pageToken };

    const response = await fetch(
      `${YOUTUBE_API_URL}/videos?${new URLSearchParams(options2)}`
    );
    const videosData = await response.json();
    setPageToken(videosData?.nextPageToken);
    setFetching(false);
    setVideos((prev) => [...prev, ...videosData.items]);
  }

  useEffect(() => {
    getVideosData();
  }, [videoCategory]);

  return (
    <div className="grid grid-cols-3 p-2 fixed top-40 overflow-y-scroll h-[calc(100vh-160px)]">
      {videos.length > 0
        ? videos.map((video) => (
            <Link key={video.id} to={`/watch?v=${video.id}`}>
              <VideoCard video={video} />
            </Link>
          ))
        : Array(18)
            .fill("")
            .map(() => <Shimmer key={Math.random()} />)}

      <div ref={observerTarget}></div>
    </div>
  );
};

export default VideosContainer;
