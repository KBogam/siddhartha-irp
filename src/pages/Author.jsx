import { Link } from "react-router-dom";
import "../Pages.css";

/* ✅ IMAGE IMPORT */
import Hermann from "../images/Hermann.jpg";

function Author() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>

        <h2>Author</h2>

        <p>
          <strong>Hermann Karl Hesse</strong> was a German-Swiss poet and novelist
          who won the 1946 Nobel Prize in Literature. His impressive literary work
          was shaped by his immense fascination with Eastern religious, spiritual,
          and philosophical traditions.
        </p>

        {/* 🖼️ AUTHOR IMAGE */}
        <img
          src={Hermann}
          alt="Hermann Hesse"
          className="author-image"
        />

        <p>
          Hesse was a widely read author, mostly in German-speaking countries,
          during his life. His fame hadn’t fully come until a few years after he
          died, when, in the mid-1960s, his work became super popular with
          post–World War II generation readers in the West.
        </p>
      </div>
    </div>
  );
}

export default Author;
