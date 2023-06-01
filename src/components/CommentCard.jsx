import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export default function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p>{comment}</p>
      <Button
        variant="outlined"
        color="success"
        size="medium"
        startIcon={<ThumbUpIcon />}
      />
      <Button
        variant="outlined"
        color="error"
        size="medium"
        startIcon={<ThumbDownIcon />}
      />
    </div>
  );
}
