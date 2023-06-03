import React, { useState, useContext } from "react";
import { UserContext } from "./User";
import { formatDate } from "../../utils/dateFormat";
import { postArticleComment } from "../../utils/api";

export default function CommentAdder({
  article_id,
  addNewComment,
  setCurrentComments,
}) {
  const [newComment, setNewComment] = useState("");
  const [commentPosted, setCommentPosted] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
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
      body: newComment,
    };

    addNewComment(userComment);
    setNewComment("");
    setDisableBtn(true);

    postArticleComment(article_id, {
      username: user.username,
      body: newComment,
    })
      .then((newCommentFromApi) => {
        setCurrentComments((currComments) => {
          const updatedComments = currComments.map((comment) =>
            comment.comment_id === 0 ? newCommentFromApi : comment
          );
          return updatedComments;
        });
        setCommentPosted(true);
        setDisableBtn(false);
      })
      .catch((err) => {
        setError(err);
        setCurrentComments((currComments) => {
          const filteredComments = currComments.filter(
            (comment) => comment.comment_id !== userComment.comment_id
          );
          return filteredComments;
        });
        setCommentPosted(false);
        setDisableBtn(false);
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
      <button type="submit" disabled={disableBtn}>
        Submit
      </button>
      {commentPosted && <p className="comment-valid"> Comment posted!</p>}
      {error && <p className="comment-invalid">Error: {error.message}</p>}
    </form>
  );
}
