import React from "react";
import VideosContainer from "./VideosContainer";
import VideoCategoriesContainer from "./VideoCategoriesContainer";

const MainContainer = () => {
  return (
    <div>
      <VideoCategoriesContainer />
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
