import { useDispatch } from "react-redux";
import { setVideoCategory } from "../redux/appSlice";

export const VideoCategory = ({ title, id, isSelected }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={`px-3 py-2 m-2 bg-gray-200 rounded-lg hover:bg-slate-50 ${
        isSelected && "bg-gray-800 text-white  hover:bg-gray-700"
      }`}
      onClick={() => {
        dispatch(setVideoCategory(id));
      }}
    >
      {title}
    </button>
  );
};

export default VideoCategory;
