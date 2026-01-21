import { Link } from "react-router-dom";
import "../Pages.css";

function Review() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>

        <h2>My Review</h2>

        <p>
          <em>Siddhartha</em> was a very profound, ground, breaking book. It was
          about a man who travelled the earth in search of truth, knowledge, and
          peace. As Siddhartha begins his travels, its contents always make the
          reader question oneself, one‘s life, one‘s choices; ultimately, one and
          one‘s knowledge.
        </p>

        <p>
          For myself, one of the most intelligent things about this book is how it
          shows that wisdom can only be gained from life and not from books or
          schoolrooms. Every stage of Siddhartha‘s life has something different
          to teach; discipline and austerity, love, possessions. The language is
          calm and gentle, almost like the flow of a river.
        </p>

        <p>
          In general, <em>Siddhartha</em> is a novel I will remember long after
          having finished reading. It is more than a story about one person‘s
          quest. It is about how each person looks for their own meaning in life.
          I would recommend this story to a reader and a scholar.
        </p>

        {/* 🔗 MORE INFO LINK */}
        <div className="more-info">
          <a
            href="https://fulltimeexplorer.com/book-review-siddhartha-hermann-hesse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Other reviews on the book →
          </a>
        </div>

      </div>
    </div>
  );
}

export default Review;
