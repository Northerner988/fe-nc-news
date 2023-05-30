export default function SingleArticleCard({
  title,
  image,
  author,
  created_at,
  votes,
  comments,
  body,
}) {
  const formattedDate = new Date(created_at).toLocaleDateString();

  return (
    <article className="single-article-card">
      <p className="article-author">
        {"Posted by "}
        {author} {formattedDate}
      </p>
      <h2 className="article-title">{title}</h2>
      <img src={image} alt={title} className="single-article-image" />

      <p className="article-body">{body}</p>
      <p className="article-votes">{votes} votes</p>
      <p className="article-comments">{comments} comments</p>
    </article>
  );
}
