import { useState, useContext } from "react";
import { UserContext } from "./User";
import { postArticleComment } from "../../utils/api";

export default function CommentAdder({ article_id, setCurrentComments }) {
  const [newComment, setNewComment] = useState("");
  const [commentPosted, setCommentPosted] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newComment.length < 5) {
      setNewComment("");
      return setError({ message: "Comment is too short!" });
    } else {
      setError(null);
    }

    const commentData = {
      username: user.username,
      body: newComment,
    };

    postArticleComment(article_id, commentData)
      .then((comment) => {
        setNewComment("");
        setCommentPosted(false);
        setCurrentComments((currComments) => [comment, ...currComments]);
        setCommentPosted(true);
        setError(null);
      })
      .catch((err) => {
        setCommentPosted(false);
        setError("Something went wrong, please try again later!");
      });
  };

  return (
    <form className="comment-adder" onSubmit={handleSubmit}>
      <label htmlFor="comment">
        <textarea
          multiline="true"
          value={newComment}
          required
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
          placeholder="Add your comment here..."
        ></textarea>
      </label>
      <button type="submit" disabled={commentPosted}>
        Submit
      </button>
      {commentPosted && <p className="comment-valid">{commentPosted}</p>}
      {commentPosted && <p className="comment-valid"> Comment posted!</p>}
      {error && <p className="comment-invalid">Error: {error.message}</p>}
    </form>
  );
}
