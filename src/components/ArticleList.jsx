import { useState, useEffect } from "react";
import { fetchArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [currentArticles, setCurrentArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles()
      .then((data) => {
        setCurrentArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (isLoading) {
    return <p>Fetching articles...</p>;
  } else if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="articles-container">
      {currentArticles.map((article) => {
        return (
          <ArticleCard
            key={article.article_id}
            article_id={article.article_id}
            title={article.title}
            image={article.article_img_url}
            author={article.author}
            created_at={article.created_at}
            votes={article.votes}
            comments={article.comment_count}
          />
        );
      })}
    </main>
  );
}
