import { Link } from "react-router-dom";
import "../Pages.css";

function Characters() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>

        <h2>Characters</h2>
        <ul>
          <li>Siddhartha</li>
          <li>Govinda</li>
          <li>Gotama (the Buddha)</li>
          <li>Kamala</li>
        </ul>

        <h3>Siddhartha</h3>
        <p>
          Siddhartha is the protagonist of the novel. He is continually seeking
          meaning and truth in life. He dislikes being told what to think and what
          to believe. He learns from his own experiences and, especially, from
          his mistakes. At the end of the novel, he gains wisdom through
          experiencing life in its totality.
        </p>

        <h3>Govinda</h3>
        <p>
          Govinda is Siddhartha‘s best friend. He is quite different from
          Siddhartha in that he prefers to have teachers and strict rules. He is
          a faithful, sweet person but not always sure of himself. Govinda feels
          that he will find enlightenment through others guiding him to the
          right place. He contrasts quite sharply with Siddhartha.
        </p>

        <h3>Gotama (the Buddha)</h3>
        <p>
          Gotama is an influential teacher of spiritual enlightenment. He knows
          of enlightenment, and teaches others how to attain it. Siddhartha
          respects him but does not want to follow his example. Gotama is
          associated with harmony, discipline and Order. He depicts the sort of
          thing that Siddhartha could have, if he took a different path.
        </p>

        <h3>Kamala</h3>
        <p>
          Kamala is a woman who shows Siddhartha the pleasures of love and the
          area of life we call “desires.” With her, Siddhartha is introduced to a
          life of wealth and comfort. She brings sensual pleasures to him and
          teaches him the meaning of loving and being loved. Kamala symbolizes
          the temptation of the material world. Her importance in the novel is
          that she helps Siddhartha to grow.
        </p>

        {/* 🔗 MORE INFO LINK */}
        <div className="more-info">
          <a
            href="https://www.cliffsnotes.com/literature/s/siddhartha/character-list"
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

export default Characters;
