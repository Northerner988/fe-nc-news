export default function LatestArticleCard({ title, image, author, topic }) {
  return (
    <article className="latest-article-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>Published by: {author}</p>
      <p>{topic}</p>
    </article>
  );
}
