import { useSearchParams } from "react-router-dom";
import RelatedVideos from "./RelatedVideos";
import Comments from "./Comments";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  return (
    <div className="flex px-4 fixed top-20 overflow-y-scroll h-[calc(100vh-80px)]">
      <div className="w-full">
        <iframe
          width="800"
          height="400"
          src={`http://www.youtube.com/embed/${searchParams.get(
            "v"
          )}?autoplay=1`}
          className="flex justify-center p-4"
          allowFullScreen
        />
        <Comments videoId={searchParams.get("v")} />
      </div>
      <div className="p-2">
        <RelatedVideos />
      </div>
    </div>
  );
};

export default WatchPage;
