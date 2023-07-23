import { useState, useEffect } from "react";
import { YOUTUBE_API_URL, YOUTUBE_API_KEY } from "../utils/constants";
import CommentCard from "./CommentCard";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  const options = {
    part: "snippet",
    key: YOUTUBE_API_KEY,
    maxResults: 25,
    videoId,
  };

  const getComments = async () => {
    const commentsData = await fetch(
      `${YOUTUBE_API_URL}/commentThreads?${new URLSearchParams(options)}`
    );
    const { items } = await commentsData.json();
    setComments(items ?? []);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <h2 className="p-2 m-4 font-bold">Comments </h2>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          comment={comment?.snippet?.topLevelComment?.snippet}
        />
      ))}
    </div>
  );
};

export default Comments;
