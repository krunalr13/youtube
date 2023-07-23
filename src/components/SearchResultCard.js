const SearchResultCard = ({ video }) => {
  const date = video?.snippet?.publishedAt;
  const date1 = new Date(date);
  const currentDate = new Date();
  const diff =
    currentDate.getMonth() -
    date1.getMonth() +
    12 * (currentDate.getFullYear() - date1.getFullYear());

  return (
    <div key={video.id.videoId} className="flex w-full">
      <div className="w-96 rounded-lg  ">
        <img
          className="px-2 py-3 rounded-3xl "
          src={video.snippet.thumbnails.medium.url}
        />
      </div>

      <div className="w-full">
        <h2 className="px-3 py-3 mx-5 font-bold">{video.Title}</h2>
        <span className=" px-3 py-3 mx-5 text-[10px] font-bold">
          {diff} months ago
        </span>
        <h6 className=" px-3 py-3 mx-5 text-[14px] font-bold ">
          {video.snippet.channelTitle}{" "}
        </h6>
        <h3 className="px-3 py-3 mx-5 text-[10px]">
          {video.snippet.description}
        </h3>
      </div>
    </div>
  );
};

export default SearchResultCard;
