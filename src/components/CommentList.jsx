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

  if (isLoading) {
    return <p>Fetching comments...</p>;
  }

  return (
    <ul className="comment-container">
      {currentComments.length === 0 ? (
        <li>This article has no comments, be the first to add something!</li>
      ) : (
        currentComments.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment.body} />
        ))
      )}
    </ul>
  );
}
