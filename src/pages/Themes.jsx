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
Individuality is important in that Siddhartha is have to contradict that enlightenment can be learned or copied. Although he respects the Buddha and spiritual gurus, he states that following someone else can only lead to learned knowledge, not real knowledge. Siddhartha is of the belief that personal truth can only be attained through personal experience, with all of its associated difficulties, contradictions and realisations. His denial of formulas emphasizes the novel‘s message that the journey to the self is not a prescribed one. Hesse demonstrates that independence is not selfishness, but an essential part of fulfillment.

        </p>

        <h3>Choice</h3>
        <p>
 In Siddhartha, enlightenment is achieved through experience and free will. The novel does not merely hold the concept of the doctrine responsible for Siddhartha‘s enlightenment, but also his decisions. At every stage he is responsible for his decision to make the journey, to discard the doctrines of Gotama, to strive in the material world, to then discard the material wealth he has acquired. All of these decisions have consequences, and Siddhartha suffers from the pain of these consequences and grows as a person from them. The novel puts forward the idea of responsibility for the individual‘s enlightenment as it is an acknowledgement of the fact that they have made a mistake and through that mistake they grow.
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
