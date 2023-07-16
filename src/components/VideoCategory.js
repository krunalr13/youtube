import React from "react";

export const VideoCategory = ({ title, id }) => {
  return (
    <button className="px-3 py-2 m-2 bg-gray-200 rounded-lg hover:bg-slate-50">
      {title}
    </button>
  );
};

export default VideoCategory;
