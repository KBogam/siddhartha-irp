import { Link } from "react-router-dom";
import "../Pages.css";

function Setting() {
  return (
    <div className="page">
      <div className="page-content">
        <Link to="/" className="home-button">← Home</Link>
        <h2>Setting</h2>
        <p>
          The story takes place in a futuristic community where sameness
          and control are enforced.
        </p>
      </div>
    </div>
  );
}

export default Setting;
