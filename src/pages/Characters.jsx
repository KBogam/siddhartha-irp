import { Link } from "react-router-dom";
import "../Pages.css";

function Characters() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>
        <h2>Characters</h2>
        <ul>
          <li>Jonas</li>
          <li>The Giver</li>
          <li>Fiona</li>
          <li>Gabriel</li>
        </ul>
      </div>
    </div>
  );
}

export default Characters;
