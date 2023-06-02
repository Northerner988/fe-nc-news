import { Link } from "react-router-dom";

export default function LatestArticleCard({
  title,
  image,
  author,
  topic,
  article_id,
}) {
  return (
    <Link to={`/articles/${article_id}`}>
      <article className="latest-article-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>Published by: {author}</p>
        <p>{topic}</p>
      </article>
    </Link>
  );
}
