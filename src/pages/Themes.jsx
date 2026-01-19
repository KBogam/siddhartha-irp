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
          Memory is very important within the story as it allows Siddhartha to connect his
          past experiences with his present understanding. Throughout the story, when he
          indulges in material pleasure or becomes lost in emotional suffering, memories of
          his early spiritual pursuit help him get back on track. These memories act as an
          inner guide, reminding him of the meaning he had once searched for and preventing
          him from being empty inside. From his past experiences, he is able to reflect
          rather than repeat the same errors. His final wisdom comes not from forgetting his
          past lives, but from integrating every experience into a unified understanding of
          existence.
        </p>

        <h3>Individuality</h3>
        <p>
          Individuality is an essential topic because Siddhartha rejects the idea that
          enlightenment can be taught or replicated. Although he respects spiritual leaders
          like the Buddha, he realizes that following another person's path will result in
          borrowed wisdom rather than actual insight. Siddhartha believes that truth must be
          discovered individually, through one's own difficulties, uncertainties, and
          revelations. His refusal to follow the rules emphasizes the novel’s principle
          that self-discovery cannot be standardized. Through Siddhartha's journey, Hesse
          shows that independence is not selfishness, but rather an essential basis for real
          fulfillment in life.
        </p>

        <h3>Choice</h3>
        <p>
          Choice drives Siddhartha's journey and supports the view that enlightenment is
          acquired through lived experience. Siddhartha makes conscious decisions during
          major changes in his life rather than relying on fate or authority. His decisions
          to leave home, reject organized teachings, pursue wealth, and later renounce it
          all have consequences that help him better understand life. These decisions often
          result in pain, but that pain serves as a valuable instructor. The novel argues
          that enlightenment is achieved not by avoiding mistakes, but by accepting
          responsibility for one’s actions and learning from their consequences.
        </p>
      </div>
    </div>
  );
}

export default Themes;
