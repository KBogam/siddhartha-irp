import { Link } from "react-router-dom";
import "../Pages.css";

function Summary() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>
        <h2>Summary</h2>
        <p>
          <em>Siddhartha</em> follows the journey of a young man in ancient India
          who seeks true meaning and enlightenment. Dissatisfied with traditional
          teachings, Siddhartha leaves his sheltered life and explores extremes
          of asceticism and indulgence.
        </p>
        <p>
          Through love, loss, and deep self-reflection, he learns that wisdom
          cannot be taught but must be experienced. In the end, Siddhartha
          achieves peace by understanding the unity of all life.
        </p>
      </div>
    </div>
  );
}

export default Summary;
