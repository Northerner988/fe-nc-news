import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="title">
      <h1>Welcome to Northcoders News</h1>
      <h2>Find the latest news here</h2>
      <Link to="/articles">View All Articles</Link>
    </header>
  );
}
