import { Link } from "react-router-dom";
import "../Pages.css";

function Review() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>

        <h2>My Review</h2>

        <p>
          <em>Siddhartha</em> is a thoughtful and meaningful book. It tells the story
          of a man searching for truth, wisdom, and inner peace. The journey of
          Siddhartha makes readers think about life, choices, and what it really
          means to understand oneself.
        </p>

        <p>
          I enjoyed how the story shows that wisdom cannot be taught, but must be
          experienced. Each stage of Siddhartha’s life teaches a different lesson,
          from simplicity and self-discipline to love and the material world. The
          writing is calm and reflective, which makes the book feel like a quiet
          journey alongside the main character.
        </p>

        <p>
          Overall, <em>Siddhartha</em> is a book that stays with you long after you
          finish reading. It is not just a story about a man, but also about how
          everyone searches for meaning in their own way. I would recommend it to
          anyone who likes stories about personal growth and life lessons.
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
