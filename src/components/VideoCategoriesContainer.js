import { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import VideoCategory from "./VideoCategory";

const VideoCategoriesContainer = () => {
  const [categories, setCategories] = useState([]);

  const options = {
    part: "snippet",
    regionCode: "IN",
    key: YOUTUBE_API_KEY,
  };

  const getCategoryList = async () => {
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/videoCategories?" +
        new URLSearchParams(options)
    );
    const categoriesData = await response.json();
    console.log("videosData", categoriesData);
    setCategories(categoriesData.items);
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="flex items-center ">
      {categories.map((category) => (
        <VideoCategory
          title={category.snippet.title}
          key={category.id}
          id={category.id}
        />
      ))}
    </div>
  );
};

export default VideoCategoriesContainer;
