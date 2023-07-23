import { useEffect, useState } from "react";
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from "../utils/constants";
import { useSearchParams, Link } from "react-router-dom";
import RelatedVideoCard from "./RelatedVideoCard";
const RelatedVideos = () => {
  const [searchParams] = useSearchParams();
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    getRelatedVideos();
  }, []);

  const options = {
    part: "snippet",
    maxResults: 50,
    order: "viewCount",
    region: "IN",
    relatedToVideoId: searchParams?.get("v"),
    type: "video",
    key: YOUTUBE_API_KEY,
  };

  const getRelatedVideos = async () => {
    const data = await fetch(
      `${YOUTUBE_API_URL}/search?${new URLSearchParams(options)}`
    );
    const videosInfo = await data.json();
    setRelatedVideos(videosInfo.items ?? []);
  };

  return (
    <>
      {relatedVideos.map((video) => (
        <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
          <RelatedVideoCard data={video} />
        </Link>
      ))}
    </>
  );
};

export default RelatedVideos;
