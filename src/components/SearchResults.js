import { useSearchParams, Link } from "react-router-dom";
import { YOUTUBE_API_URL, YOUTUBE_API_KEY } from "../utils/constants";
import { useEffect, useState } from "react";
import SearchResultCard from "./SearchResultCard";
import SearchResultsShimmer from "./SearchResultsShimmer";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);

  const options = {
    part: "snippet",
    maxResults: 100,
    key: YOUTUBE_API_KEY,
    q: searchParams.get("q"),
  };

  const getSearchResults = async () => {
    const data = await fetch(
      `${YOUTUBE_API_URL}/search?${new URLSearchParams(options)}`
    );
    const searchResults = await data.json();
    setVideos(searchResults.items);
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className="myt-20 overflow-y-scroll h-[calc(100vh-80px)]">
      {videos.length > 0
        ? videos.map(
            (video) =>
              video.id.videoId && (
                <Link
                  key={video.id.videoId}
                  to={`/watch?v=${video.id.videoId}`}
                >
                  <SearchResultCard video={video} />
                </Link>
              )
          )
        : Array(20)
            .fill("")
            .map(() => <SearchResultsShimmer />)}
    </div>
  );
};

export default SearchResults;
