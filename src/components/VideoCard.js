import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div key={video.id} className="p-2 m-2 max-sm:w-96 max-sm:h-96">
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
  );
};

export default VideoCard;
