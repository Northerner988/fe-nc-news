import React, { useState, useContext } from "react";
import { UserContext } from "./User";
import { formatDate } from "../../utils/dateFormat";
import { postArticleComment } from "../../utils/api";

export default function CommentAdder({ article_id, setCurrentComments }) {
  const [newComment, setNewComment] = useState("");
  const [commentPosted, setCommentPosted] = useState({
    posted: false,
    disableBtn: false,
  });

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

    const userComment = {
      comment_id: 0,
      author: user.username,
      created_at: formatDate(new Date()),
      comment: newComment,
    };

    setCurrentComments((currComments) => {
      setNewComment("");
      setCommentPosted({ posted: true, disableBtn: true });
      return [userComment, ...currComments];
    });

    postArticleComment(article_id, {
      username: user.username,
      body: newComment,
    })
      .then((newCommentFromApi) => {
        setCurrentComments((currComments) =>
          currComments.map((comment) =>
            comment.comment_id === 0 ? newCommentFromApi : comment
          )
        );
        setCommentPosted({ posted: true, disableBtn: false });
      })
      .catch((err) => {
        setError(err);
        setCurrentComments((currComments) =>
          currComments.filter(
            (comment) => comment.comment_id !== userComment.comment_id
          )
        );
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
      <button type="submit" disabled={commentPosted.disableBtn}>
        Submit
      </button>
      {commentPosted.posted && (
        <p className="comment-valid"> Comment posted!</p>
      )}
      {error && <p className="comment-invalid">Error: {error.message}</p>}
    </form>
  );
}
