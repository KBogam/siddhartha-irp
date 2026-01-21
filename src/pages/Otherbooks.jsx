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

        <div className="book-grid">
          {/* The Alchemist */}
          <div className="book-card">
            <a
              href="https://www.britannica.com/topic/The-Alchemist-novel-by-Coelho"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://m.media-amazon.com/images/I/71+2-t7M35L._AC_UF1000,1000_QL80_.jpg"
                alt="The Alchemist book cover"
              />
            </a>
            <p>
              <em>The Alchemist</em> by Paulo Coelho – A story about following your dreams
              and listening to your heart.
            </p>
          </div>

          {/* The Giver */}
          <div className="book-card">
            <a
              href="https://en.wikipedia.org/wiki/The_Giver"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.thriftbooks.com/api/imagehandler/m/BEDA3F89D03E6396F1A03A051528969418E9772B.jpeg"
                alt="The Giver book cover"
              />
            </a>
            <p>
              <em>The Giver</em> by Lois Lowry – A thought-provoking tale about choice,
              freedom, and understanding society.
            </p>
          </div>

          {/* Life of Pi */}
          <div className="book-card">
            <a
              href="https://en.wikipedia.org/wiki/Life_of_Pi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://m.media-amazon.com/images/I/71wW1coSR0L._AC_UF1000,1000_QL80_.jpg"
                alt="Life of Pi book cover"
              />
            </a>
            <p>
              <em>Life of Pi</em> by Yann Martel – A journey of survival, faith, and
              personal belief in the face of hardship.
            </p>
          </div>

          {/* Man’s Search for Meaning */}
          <div className="book-card">
            <a
              href="https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ffKXcvvOAZHF9yp46mhe857silJER6Ha6w&s"
                alt="Man's Search for Meaning book cover"
              />
            </a>
            <p>
              <em>Man’s Search for Meaning</em> by Viktor Frankl – A philosophical memoir
              exploring the human search for purpose and resilience.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default OtherBooks;
