import { useState, useEffect } from "react";
import { fetchLatestArticles } from "../../utils/api";
import Header from "./Header";
import LatestArticleCard from "./LatestArticleCard";

export default function HomePage() {
  const [currentArticles, setCurrentArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchLatestArticles()
      .then((data) => {
        setCurrentArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (isLoading) {
    return <p>Fetching latest articles...</p>;
  } else if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="homepage-container">
      <Header />
      {currentArticles.slice(0, 6).map((article) => {
        return (
          <LatestArticleCard
            key={article.article_id}
            article_id={article.article_id}
            title={article.title}
            image={article.article_img_url}
            author={article.author}
            topic={article.topic}
          />
        );
      })}
    </main>
  );
}
