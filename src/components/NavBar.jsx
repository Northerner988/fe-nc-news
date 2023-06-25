import { Link } from "react-router-dom";
import { ImNewspaper } from "react-icons/im";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <ImNewspaper className="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </nav>
  );
}
