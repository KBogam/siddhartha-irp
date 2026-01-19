import { Link } from "react-router-dom";
import "../Pages.css";

function OtherBooks() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>
        <h2>Other Books Like This</h2>
        <p>
          If you enjoyed <em>Siddhartha</em>, you may also like other novels that
          explore self-discovery, philosophy, and the search for meaning.
        </p>
        <ul>
          <li><em>The Alchemist</em> by Paulo Coelho</li>
          <li><em>The Giver</em> by Lois Lowry</li>
          <li><em>Life of Pi</em> by Yann Martel</li>
          <li><em>Man’s Search for Meaning</em> by Viktor Frankl</li>
        </ul>
      </div>
    </div>
  );
}

export default OtherBooks;
