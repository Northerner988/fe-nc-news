import { fetchCommentsById } from "../../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import CommentIcon from "@mui/icons-material/Comment";

export default function CommentsList({ article_id }) {
  const [currentComments, setCurrentComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsById(article_id).then((data) => {
      setCurrentComments(data);
      setIsLoading(false);
    });
  }, [article_id]);

  const addNewComment = (newComment) => {
    setCurrentComments((currComments) => [newComment, ...currComments]);
  };

  if (isLoading) {
    return <p>Fetching comments...</p>;
  }

  return (
    <section className="comment-container">
      <h2>
        <CommentIcon /> Comments
      </h2>
      <ul>
        {currentComments.length === 0 ? (
          <li>This article has no comments, be the first to add something!</li>
        ) : (
          <>
            <CommentAdder
              article_id={article_id}
              addNewComment={addNewComment}
              setCurrentComments={setCurrentComments}
            />
            {currentComments.map((comment) => (
              <CommentCard
                key={comment.comment_id}
                author={comment.author}
                created_at={comment.created_at}
                comment={comment.body}
              />
            ))}
          </>
        )}
      </ul>
    </section>
  );
}
