import { Link } from "react-router-dom";
import "../Pages.css";

function Summary() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>

        <h2>Summary</h2>

        <p>
        Hermann Hesse‘s book, Siddhartha, is about a young man who is dissatisfied with the life he is expected to live. It is a journey about discovering oneself, god, truth, and life. Despite his privileged upbringing and education in the religion of his land, Siddhartha (the protagonist in the novel) recognizes that he does not quite have it all. He leaves home and tries the life of a samana, where it is thought that suffering equates a higher knowledge. However, Siddhartha realizes that he is not gaining wisdom just by suffering. When he finally comes into contact with the Buddha, he admires him, but knows his own journey must be different. He leaves the ascetic lifestyle and immerses himself in the material world where he finds love, wealth and pleasure, which soon become empty and unfulfilling. Siddhartha learns to listen and to think for himself thanks to his friendship with the ferryman Vasudeva, and in the end accepts all parts of himself and of life, realizing that enlightenment comes from experience.
        </p>

      </div>
    </div>
  );
}

export default Summary;
