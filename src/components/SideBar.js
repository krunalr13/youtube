import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import HistoryIcon from "@mui/icons-material/History";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const SideBar = () => {
  return (
    <div className="w-2/12 overflow-y-scroll h-[calc(100vh-80px)]">
      <ul className="py-2 my-2">
        <li className="py-2 px-8 hover:bg-gray-100 rounded-lg">
          <Link className="flex gap-2" to="/">
            <HomeIcon /> Home
          </Link>
        </li>
        <li className="flex gap-2 py-2 px-8 hover:bg-gray-100 rounded-lg">
          <YouTubeIcon /> Shorts
        </li>
        <li className="flex gap-2 py-2 px-8 hover:bg-gray-100 rounded-lg">
          <SubscriptionsIcon /> Subcriptions
        </li>
      </ul>
      <div className="py-3 border-t-2">
        <ul className="py-2 my-2">
          <li className="flex gap-2 py-2 px-8 hover:bg-gray-100 rounded-lg">
            <LibraryAddIcon /> Library
          </li>
          <li className="flex gap-2 py-2 px-8 hover:bg-gray-100 rounded-lg">
            <HistoryIcon /> History
          </li>
          <li className="flex gap-2 py-2 px-8 hover:bg-gray-100 rounded-lg">
            <WatchLaterIcon /> Watch Later
          </li>
          <li className="flex gap-2 py-2 px-8 hover:bg-gray-100 rounded-lg">
            <ThumbUpOffAltIcon /> Liked videos
          </li>
        </ul>
      </div>

      <div className="py-3">
        <h2 className="font-bold flex py-2 px-8">Subcriptions</h2>
        <ul>
          <li className="py-2 px-8">Music</li>
          <li className="py-2 px-8">Sports</li>
          <li className="py-2 px-8">Gaming</li>
          <li className="py-2 px-8">Movies</li>
        </ul>
      </div>

      <div className="py-3">
        <h2 className="font-bold flex py-2 px-8">Explore</h2>
        <ul>
          <li className="py-2 px-8">Trending</li>
          <li className="py-2 px-8">Music</li>
          <li className="py-2 px-8">Movies</li>
          <li className="py-2 px-8">Live</li>
          <li className="py-2 px-8">Gaming</li>
          <li className="py-2 px-8">News</li>
          <li className="py-2 px-8">Sports</li>
          <li className="py-2 px-8">Learning</li>
          <li className="py-2 px-8">Fashion & Beauty</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
