import { Link } from "react-router-dom";
import "../Pages.css";

function Themes() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>

        <h2>Themes</h2>
        <ul>
          <li>Freedom vs Control</li>
          <li>Importance of Memory</li>
          <li>Individuality</li>
          <li>Choice</li>
        </ul>

        <h3>Freedom vs Control</h3>
        <p>
          A major theme shown in the book <em>Siddhartha</em> is freedom vs control.
          Throughout the book, the protagonist, Siddhartha, fights against the societal
          norms placed by society, religion, and teachers. He feels limited rather than
          fulfilled, which prompts him to disobey his father and leave his family to become
          a Samana with his friend Govinda. As a Samana, he lives a very simplistic but poor
          life free of any material wealth and even proper food. He believes that actual
          experience rather than submission to authority is the source to true freedom.
          However, by the end of the book, Siddhartha can only find peace by letting go of
          control and accepting life as it occurs.
        </p>

        <h3>Importance of Memory</h3>
        <p>
         Memory plays a significant role in the story, allowing Siddhartha to link his previous experiences with his current comprehension. As the narrative progresses, whenever he gives in to worldly desires or becomes overwhelmed by emotional distress, recollections of his initial spiritual journey help reorient him. These memories serve as an internal guide, reminding him of the purpose he once sought and preventing him from feeling empty. By drawing from his past, he is able to reflect and learn, rather than repeating his errors. His ultimate wisdom comes not from dismissing his former experiences, but from integrating every event into a comprehensive understanding of existence.
        </p>

        <h3>Individuality</h3>
        <p>
 The concept of individuality is significant because Siddhartha disagrees with the notion that enlightenment can be taught or duplicated. While he acknowledges the Buddha and other spiritual figures, he understands that adhering to another's path leads to acquired knowledge, not genuine understanding. Siddhartha maintains that personal truth is found through individual experiences, including challenges, ambiguities, and insights. His rejection of prescribed rules underscores the novel's theme that self-discovery is not a standardized process. Hesse illustrates through Siddhartha's experiences that independence is not equivalent to selfishness, but is instead a fundamental element of achieving fulfillment.

        </p>

        <h3>Choice</h3>
        <p>
  Siddhartha's journey demonstrates that enlightenment comes through personal choices and lived experience. He makes deliberate decisions throughout his life, rather than relying on fate or external authority. His choices—to leave home, reject formal teachings, pursue wealth, and later abandon it—all have consequences that deepen his understanding of life. These decisions often lead to pain, but that pain serves as a valuable instructor. The novel suggests that enlightenment is achieved not by avoiding mistakes, but by accepting responsibility for one's actions and learning from their outcomes.
        </p>

        {/* 🔗 MORE INFO LINK */}
        <div className="more-info">
          <a
            href="https://www.litcharts.com/lit/siddhartha/themes"
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

export default Themes;
