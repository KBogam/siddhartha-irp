import { Link } from "react-router-dom";
import "../Pages.css";

function Setting() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>

        <h2>Setting</h2>

        <p>
          The story of <em>Siddhartha</em> takes place in ancient India, during the time
          of the Buddha. The world is full of forests, rivers, villages, and cities.
          Siddhartha travels through many different places, each representing a
          different stage of life.
        </p>

        <p>
          Early in the story, Siddhartha lives in his father’s home in a peaceful
          town. He then leaves to live as a Samana, wandering through forests and
          practicing strict self-discipline. Later, he experiences life in the
          city, filled with wealth, luxury, and human desires.
        </p>

        <p>
          The river near the end of the story is a key setting, symbolizing life,
          time, and wisdom. It is there that Siddhartha finally understands the
          unity of all experiences and reaches inner peace. The different settings
          reflect both the external and inner journey Siddhartha undertakes.
        </p>

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
