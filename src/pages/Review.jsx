import { Link } from "react-router-dom";
import "../Pages.css";

function Review() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>
        <h2>My Review</h2>
        <p>
          <em>The Giver</em> is a powerful novel that makes readers think
          about freedom, emotion, and choice.
        </p>
      </div>
    </div>
  );
}

export default Review;
