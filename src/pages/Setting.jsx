import { Link } from "react-router-dom";
import "../Pages.css";

function Setting() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>

        <h2>Setting</h2>

        <p>
          Siddhartha’s story happens in ancient India during the same era as the
          Buddha. The environment is made up of forests, flowing rivers, villages,
          and large cities. Siddhartha travels through many places, and each place
          symbolizes a particular stage of his life.
        </p>

        <p>
          At first, Siddhartha lives in his father’s house in a quiet town. Later,
          he decides to leave and become a Samana, walking through forests and
          following strict rules of self-discipline. As the story continues, he
          enters the city, where life is filled with wealth, comfort, and human
          desires.
        </p>

        <p>
          Near the end of the story, the river becomes very important and serves
          as a symbol of life, time, and wisdom. By listening to the river,
          Siddhartha gains an understanding of the unity of all things and finds
          peace within himself. The setting reflects both the physical journey he
          takes and his inner journey toward enlightenment.
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
