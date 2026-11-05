
import "./Header.css";

const newsItems = [
  "Admissions Open for BHMS and PG Courses",
  "Latest College Notices and Announcements",
  "Hospital OPD Updates",
  "Upcoming College Events"
];

export default function Header() {
  return (
    <>
      <header className="college-header">
        {/* Left: College logo */}
        <div className="college-logo">
          <img
            src="/images/college-logo.png"
            alt="College Logo"
          />
        </div>

        {/* Center: College information */}
        <div className="college-info">
          <h3 className="sanstha-name">
            NAME OF SANSTHA
          </h3>

          <h1 className="college-name">
            NAME OF MEDICAL COLLEGE
          </h1>

          <p className="college-address">
            College Address, Sangli, Maharashtra
          </p>

          <p className="college-approval">
            Approved by ... | Affiliated to ...
          </p>
        </div>

        {/* Right: Three official logos */}
        <div className="official-logos">
          <img src="/images/college_logo.png" alt="Official Logo 1" />
          <img src="/images/muhs-logo.png" alt="MUHS Logo" />
          <img src="/images/nabh-logo.png" alt="Official Logo 3" />
        </div>
      </header>

      {/* Blue menu bar */}
      <nav className="main-navbar">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/academics">Academics</a>
        <a href="/departments">Departments</a>
        <a href="/hospital">Hospital</a>
        <a href="/admissions">Admissions</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </nav>

      {/* Latest news marquee */}
      <div className="news-bar">
        <div className="news-label">
          LATEST NEWS
        </div>

        <div className="news-window">
          <div className="news-track">
            {[...newsItems, ...newsItems].map((news, index) => (
              <span className="news-item" key={index}>
                {news}
                <span className="news-dot"> ◆ </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
