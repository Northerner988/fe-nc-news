import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";
import { formatDate } from "../../utils/dateFormat";
import CommentList from "./CommentList";
import ArticleVotes from "./ArticleVotes";

export default function SingleArticle() {
  const [currentArticle, setCurrentArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id)
      .then((data) => {
        setCurrentArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Fetching article...</p>;
  } else if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="single-article-container">
      <article className="single-article-card">
        <p className="single-article-author">
          {"Posted by "}
          {currentArticle.author} {formatDate(currentArticle.created_at)}
        </p>
        <h2>{currentArticle.title}</h2>
        <img
          src={currentArticle.article_img_url}
          alt={currentArticle.title}
          className="single-article-image"
        />

        <p className="single-article-body">{currentArticle.body}</p>
        <ArticleVotes article_id={article_id} votes={currentArticle.votes} />
      </article>
      <CommentList article_id={article_id} />
    </main>
  );
}
