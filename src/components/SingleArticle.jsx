import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../../utils/api";

import SingleArticleCard from "./SingleArticleCard";

export default function SingleArticle() {
  const [currentArticle, setCurrentArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticleById(article_id).then((data) => {
      setCurrentArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <main className="single-article-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <SingleArticleCard
          article_id={currentArticle.article_id}
          title={currentArticle.title}
          image={currentArticle.article_img_url}
          author={currentArticle.author}
          created_at={currentArticle.created_at}
          votes={currentArticle.votes}
          comments={currentArticle.comment_count}
          topic={currentArticle.topic}
          body={currentArticle.body}
        />
      )}
    </main>
  );
}
