import { Link } from "react-router-dom";
import "../Pages.css";

function Setting() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>

        <h2>Setting</h2>

        <p>
      Similar to the Buddha, the story of Siddartha takes place in the India of old times in the same time period as the Buddha. The setting is a forest with running streams, villages and large cities. Siddhartha moves from city to city throughout the story, each one having a meaning in terms of his life.

Initially, Siddhartha was a resident of the house of his father. We are told that Siddartha was brought up in peaceful village. Later we learn that he leaves the house to become a Samana, where he travels through the woods and lives under extremely strict ethical code. Later he reaches the city into where everything is abundant in wealth and comfort as well as human wishes.

Toward the conclusion of the novel, the river reclaims some significance and functions as a metaphor for life, the clock of life, and acquiring wisdom. Siddhartha, hears and listens to the river, and in doing so, learns that everything is one, and finds enlightenment. The setting mirrors the physical journey he takes as well as the inward journey.
        </p>

<img
  src="https://images.stockcake.com/public/e/d/4/ed46e285-7af7-44e8-9971-9f5846a3eeeb_large/sunlit-forest-river-stockcake.jpg"
  alt="Sunlit forest river"
  className="hero-image"
/>

        {/* 🔗 MORE INFO LINK */}
        <div className="more-info">
          <a
            href="https://www.dw.com/en/100-years-of-hermann-hesses-siddhartha/a-63113218"
            target="_blank"
            rel="noopener noreferrer"
          >
            More info →
          </a>
        </div>

      </div>
    </div>
  );
}

export default Setting;
