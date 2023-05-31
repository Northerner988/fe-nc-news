import { formatDate } from "../../utils/dateFormat";

export default function SingleArticleCard({
  title,
  image,
  author,
  created_at,
  votes,
  comments,
  body,
}) {
  return (
    <article className="single-article-card">
      <p className="single-article-author">
        {"Posted by "}
        {author} {formatDate(created_at)}
      </p>
      <h2>{title}</h2>
      <img src={image} alt={title} className="single-article-image" />

      <p className="single-article-body">{body}</p>
      <p className="article-votes">{votes} votes</p>
      <p className="article-comments">{comments} comments</p>
    </article>
  );
}
