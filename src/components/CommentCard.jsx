import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { formatDate } from "../../utils/dateFormat";

export default function CommentCard({ comment, author, created_at }) {
  return (
    <div className="comment-card">
      <p className="comment-author">{author}</p>
      <p className="comment-date">{formatDate(created_at)}</p>
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
