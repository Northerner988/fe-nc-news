import { Link } from "react-router-dom";

export default function ArticleCard({
  title,
  image,
  author,
  created_at,
  votes,
  comments,
  article_id,
}) {
  const formattedDate = new Date(created_at).toLocaleDateString();

  return (
    <Link key={article_id} to={`/articles/${article_id}`}>
      <article className="article-card">
        <p className="article-date">Created on: {formattedDate}</p>
        <img src={image} alt={title} className="article-image" />
        <h2 className="article-title">{title}</h2>
        <p className="article-votes">{votes} votes</p>
        <p className="article-comments">{comments} comments</p>
        <p className="article-author">Published by: {author}</p>
      </article>
    </Link>
  );
}