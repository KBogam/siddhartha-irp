import { Link } from "react-router-dom";
import "../Pages.css";

function Summary() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>

        <h2>Summary</h2>

        <p>
          <em>Siddhartha</em> tells the story of a young man in ancient India who is searching 
          for true meaning and spiritual enlightenment. Unsatisfied with the teachings of his 
          family and the local priests, he leaves his home to explore life on his own terms.
        </p>

        <p>
          He first becomes a Samana, practicing strict self-discipline and renouncing worldly 
          pleasures. Later, he explores wealth, love, and material comfort, learning about 
          desire, attachment, and the distractions of the world. Throughout his journey, he 
          experiences joy, sorrow, and deep reflection, gradually understanding the lessons 
          life teaches him.
        </p>

        <p>
          In the end, Siddhartha finds inner peace by the river, realizing that true wisdom 
          cannot be taught but must be discovered through experience. He learns that all 
          aspects of life—spiritual, emotional, and material—are connected, and this unity 
          brings him enlightenment.
        </p>

      </div>
    </div>
  );
}

export default Summary;
