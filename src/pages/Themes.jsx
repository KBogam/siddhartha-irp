import { Link } from "react-router-dom";
import "../Pages.css";

function Themes() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>
        <h2>Themes</h2>
        <ul>
          <li>Freedom vs Control</li>
          <li>Importance of Memory</li>
          <li>Individuality</li>
          <li>Choice</li>
        </ul>
      </div>
    </div>
  );
}

export default Themes;
