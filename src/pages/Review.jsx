import { Link } from "react-router-dom";
import "../Pages.css";

function Review() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>

        <h2>My Review</h2>

        <p>
          <em>Siddhartha</em> is a deep and groundbreaking novel. It tells the story
          of a man who goes in search of truth, wisdom, and inner peace. As
          Siddhartha begins his journey, it also encourages readers to reflect on
          their own lives, their decisions, and what it truly means to know
          oneself.
        </p>

        <p>
          For me, one of the things I liked most about the book is how it shows
          that wisdom cannot really be taught—it must be experienced. Each phase
          of Siddhartha’s life teaches a new lesson, such as discipline and
          simplicity, love, and living with material possessions. The language is
          calm and quiet, making the reader feel thoughtful, as if they are taking
          a peaceful walk alongside Siddhartha.
        </p>

        <p>
          Overall, <em>Siddhartha</em> is a story that stays with you even after it
          ends. It is not just about one man, but about how every person searches
          for meaning in their own way. I would recommend this book to anyone who
          enjoys stories with life lessons and personal development.
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
