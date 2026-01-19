import { Link } from "react-router-dom";
import "../Pages.css";

function OtherBooks() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>

        <h2>Other Books Like This</h2>

        <p>
          If you enjoyed <em>Siddhartha</em>, you might like other books that explore
          self-discovery, personal growth, and the search for meaning in life.
        </p>

        <ul>
          <li><em>The Alchemist</em> by Paulo Coelho – A story about following your dreams and listening to your heart.</li>
          <li><em>The Giver</em> by Lois Lowry – A thought-provoking tale about choice, freedom, and understanding society.</li>
          <li><em>Life of Pi</em> by Yann Martel – A journey of survival, faith, and personal belief in the face of hardship.</li>
          <li><em>Man’s Search for Meaning</em> by Viktor Frankl – A philosophical memoir exploring the human search for purpose and resilience.</li>
        </ul>
      </div>
    </div>
  );
}

export default OtherBooks;
