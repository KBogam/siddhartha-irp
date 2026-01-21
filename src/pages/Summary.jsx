import { Link } from "react-router-dom";
import "../Pages.css";

function Summary() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>

        <h2>Summary</h2>

        <p>
          <em>Siddhartha</em> is a story about a young man from ancient India who
          leaves his home and family to seek truth, wisdom, and inner peace.
          Although he is smart and respected, he feels unhappy with what he learns
          from others. He believes that real knowledge comes from personal
          experience rather than simply listening to what others say.
        </p>

        <p>
          At first, Siddhartha joins a group of religious followers called
          Samanas, where he practices strict self-discipline and denial. However,
          he soon realizes that being overly strict or spiritual does not lead to
          true happiness.
        </p>

        <p>
          Next, Siddhartha enters a lively world filled with people, where he
          experiences love, wealth, and desire. He becomes close to a woman named
          Kamala and works as a merchant. Through this lifestyle, he learns about
          pleasure, pain, and emotional attachment.
        </p>

        <p>
          After some time, Siddhartha feels empty and decides to leave this life
          behind once again. Feeling lost, he finds himself by a river, which
          plays an important role in his spiritual journey.
        </p>

        <p>
          Living by the river, Siddhartha begins to listen and reflect deeply. The
          river teaches him that time is not real and that all moments are
          connected. By being patient and accepting things as they are, he
          discovers inner peace.
        </p>

        <p>
          In the end, Siddhartha gains wisdom not from teachers, but through his
          own experiences. He feels calm and understands that true wisdom comes
          from accepting all aspects of life as a unified whole.
        </p>

      </div>
    </div>
  );
}

export default Summary;
