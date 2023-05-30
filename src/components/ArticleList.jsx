import { useState, useEffect } from "react";
import { fetchArticles } from "../../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticlesList() {
  const [currentArticles, setCurrentArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then((data) => {
      setCurrentArticles(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Page is Loading...</p>;
  }

  return (
    <main className="articles-container">
      {currentArticles.map((article) => (
        <ArticleCard
          key={article.article_id}
          article_id={article.article_id}
          title={article.title}
          image={article.article_img_url}
          author={article.author}
          created_at={article.created_at}
          votes={article.votes}
          comments={article.comment_count}
        ></ArticleCard>
      ))}
    </main>
  );
}
