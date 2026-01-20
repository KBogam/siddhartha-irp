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
          Siddhartha is the main character of the novel. He is always searching
          for meaning and truth in life. He does not like being told how to think
          or what to believe. Instead, he learns through his own experiences and
          mistakes. By the end of the story, he gains wisdom by understanding
          life as a whole.
        </p>

        <h3>Govinda</h3>
        <p>
          Govinda is Siddhartha’s close friend. Unlike Siddhartha, he prefers to
          follow teachers and religious rules. He is loyal and kind, but often
          unsure of himself. Govinda believes guidance from others will lead him
          to enlightenment. His character shows a different way of seeking
          truth.
        </p>

        <h3>Gotama (the Buddha)</h3>
        <p>
          Gotama is a respected spiritual teacher in the story. He has already
          reached enlightenment and teaches others how to do the same.
          Siddhartha admires him but does not follow his path. Gotama represents
          peace, discipline, and spiritual order. He shows what Siddhartha could
          become, but through a different journey.
        </p>

        <h3>Kamala</h3>
        <p>
          Kamala is a woman who teaches Siddhartha about love and desire. She
          introduces him to a wealthy and comfortable lifestyle. Through her,
          Siddhartha experiences pleasure and emotional attachment. Kamala
          represents the material world and its temptations. She plays an
          important role in Siddhartha’s growth.
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
