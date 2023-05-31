import { fetchCommentsById } from "../../utils/api";
import { useState, useEffect } from "react";
import CommentCard from "./CommentCard";

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

  return (
    <ul className="comment-container">
      {isLoading ? (
        <p>Fetching comments...</p>
      ) : (
        currentComments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment.body} />
        ))
      )}
    </ul>
  );
}
