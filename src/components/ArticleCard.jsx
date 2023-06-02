import { formatDate } from "../../utils/dateFormat";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/dateFormat";

export default function ArticleCard({
  title,
  image,
  author,
  created_at,
  votes,
  comments,
  article_id,
}) {
  return (
    <Link to={`/articles/${article_id}`}>
      <article className="article-card">
        <p className="article-date">Created on: {formatDate(created_at)}</p>
        <img src={image} alt={title} className="article-image" />
        <h2 className="article-title">{title}</h2>
        <p className="article-votes">{votes} votes</p>
        <p className="article-comments">{comments} comments</p>
        <p className="article-author">Published by: {author}</p>
      </article>
    </Link>
  );
}
