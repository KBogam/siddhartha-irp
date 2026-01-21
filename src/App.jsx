import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import Author from "./pages/Author";
import Themes from "./pages/Themes";
import Characters from "./pages/Characters";
import Setting from "./pages/Setting";
import Review from "./pages/Review";

/* 🆕 NEW PAGE IMPORTS */
import OtherBooks from "./pages/Otherbooks";
import Summary from "./pages/Summary";

/* ✅ FIXED IMAGE IMPORTS */
import BookCover from "./images/BookCover.jpg";
import Buddha from "./images/Buddha.png";

function App() {
  return (
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <div className="home">
            {/* Buddha background image */}
            <img
              src={Buddha}
              alt="Buddha background"
              className="buddha-bg"
            />

            {/* Foreground content */}
            <div className="home-content">
              <div className="home-header">
                <h1>Siddhartha</h1>
                <p>A novel by Hermann Hesse</p>
              </div>

              <nav className="home-nav">
                <Link to="/author">Author</Link>
                <Link to="/themes">Themes</Link>
                <Link to="/characters">Characters</Link>
                <Link to="/setting">Setting</Link>
                <Link to="/review">Review</Link>

                {/* 🆕 NEW LINKS */}
                <Link to="/summary">Summary</Link>
                <Link to="/other-books">Other Books</Link>
              </nav>
            </div>

            {/* Book cover */}
            <img
              src={BookCover}
              alt="Siddhartha Book Cover"
              className="book-cover"
            />

            {/* ✅ Explanation text directly BELOW book cover */}
            <div className="home-bottom-note">
              <p>
                You can navigate through the site with the buttons. I created each page and the content was written by me. However you can click
                <strong> “More info”</strong> links at the bottom of each page,
                which leads to official and trusted sources.
              </p>
            </div>

            {/* Footer BELOW the text */}
            <div className="home-footer">
              <p>IRP Project • Krish Bogam</p>
            </div>
          </div>
        }
      />

      {/* OTHER PAGES */}
      <Route path="/author" element={<Author />} />
      <Route path="/themes" element={<Themes />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/review" element={<Review />} />

      {/* 🆕 NEW ROUTES */}
      <Route path="/summary" element={<Summary />} />
      <Route path="/other-books" element={<OtherBooks />} />
    </Routes>
  );
}

export default App;
