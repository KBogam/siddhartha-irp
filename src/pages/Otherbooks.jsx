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
          <li>
            <em>The Alchemist</em> by Paulo Coelho – A story about following your dreams
            and listening to your heart.{" "}
            <a
              href="https://www.britannica.com/topic/The-Alchemist-novel-by-Coelho"
              target="_blank"
              rel="noopener noreferrer"
            >
              More info →
            </a>
          </li>

          <li>
            <em>The Giver</em> by Lois Lowry – A thought-provoking tale about choice,
            freedom, and understanding society.{" "}
            <a
              href="https://en.wikipedia.org/wiki/The_Giver"
              target="_blank"
              rel="noopener noreferrer"
            >
              More info →
            </a>
          </li>

          <li>
            <em>Life of Pi</em> by Yann Martel – A journey of survival, faith, and personal
            belief in the face of hardship.{" "}
            <a
              href="https://en.wikipedia.org/wiki/Life_of_Pi"
              target="_blank"
              rel="noopener noreferrer"
            >
              More info →
            </a>
          </li>

          <li>
            <em>Man’s Search for Meaning</em> by Viktor Frankl – A philosophical memoir
            exploring the human search for purpose and resilience.{" "}
            <a
              href="https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning"
              target="_blank"
              rel="noopener noreferrer"
            >
              More info →
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OtherBooks;
