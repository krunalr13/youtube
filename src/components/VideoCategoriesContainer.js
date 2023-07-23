import VideoCategory from "./VideoCategory";
import { VIDEO_CATEGORIES } from "../utils/constants";

const VideoCategoriesContainer = () => {
  return (
    <div className="flex px-4 items-center overflow-x-auto fixed top-20">
      {VIDEO_CATEGORIES.map((category) => (
        <VideoCategory
          title={category.name}
          key={category.videoCategoryId}
          id={category.videoCategoryId}
        />
      ))}
    </div>
  );
};

export default VideoCategoriesContainer;
