import { useState, useEffect } from "react";
import { fetchLatestArticles } from "../../utils/api";
import { useSearchParams } from "react-router-dom";

import LatestArticleCard from "./LatestArticleCard";
import Header from "./Header";

export default function HomePage() {
  const [currentArticles, setCurrentArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);

  const order = "asc";

  useEffect(() => {
    setIsLoading(true);
    fetchLatestArticles(order).then((data) => {
      setCurrentArticles(data);
      setIsLoading(false);
    });
  }, [order]);

  return (
    <section className="homepage-container">
      <Header />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        currentArticles.slice(0, 6).map((article) => {
          return (
            <LatestArticleCard
              key={article.article_id}
              title={article.title}
              image={article.article_img_url}
              author={article.author}
              topic={article.topic}
            />
          );
        })
      )}
    </section>
  );
}
