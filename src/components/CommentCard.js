import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const CommentCard = ({ comment }) => {
  return (
    <div className="flex gap-4 p-4 m-2">
      <img
        src={comment.authorProfileImageUrl}
        alt={comment.authorDisplayName}
        className="rounded-full h-10 w-10"
      />

      <div className="flex flex-col gap-1">
        <h3 className="font-bold">{comment.authorDisplayName}</h3>
        <div>{comment.textOriginal}</div>
        <div className="flex justify-start gap-2">
          <ThumbUpOffAltIcon /> {comment.likeCount}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
