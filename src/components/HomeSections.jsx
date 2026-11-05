
import "./HomeSections.css";

const departments = [
  "Department of Anatomy",
  "Department of Physiology",
  "Department of Biochemistry",
  "Department of Pathology",
  "Department of Microbiology",
  "Department of Forensic Medicine",
  "Department of Community Medicine",
  "Department of Organon of Medicine"
];

export default function HomeSections() {
  return (
    <>
      {/* Statistics */}
      <section className="statistics-section">
        <div className="stat-box">
          <span className="stat-symbol">🎓</span>
          <h2>500+</h2>
          <p>Enrolled Students</p>
        </div>

        <div className="stat-box">
          <span className="stat-symbol">👨‍⚕️</span>
          <h2>75+</h2>
          <p>Teaching &amp; Non-Teaching Staff</p>
        </div>

        <div className="stat-box">
          <span className="stat-symbol">🏥</span>
          <h2>100</h2>
          <p>Hospital Beds</p>
        </div>
      </section>

      {/* Departments */}
      <section className="departments-section">
        <div className="section-heading">
          <h2>Our Departments</h2>
          <p>Quality education, clinical training and healthcare</p>
        </div>

        <div className="departments-grid">
          {departments.map((department, index) => (
            <a
              className="department-card"
              href={`/departments/${index + 1}`}
              key={department}
            >
              <span className="department-icon">✚</span>
              <h3>{department}</h3>
              <span className="department-link">
                View Details →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Hospital OPD */}
      <section className="opd-section">
        <div className="opd-content">
          <div>
            <span className="opd-tag">COLLEGE HOSPITAL</span>
            <h2>Hospital &amp; OPD Services</h2>
            <p>
              Our hospital provides healthcare services and
              clinical learning opportunities for students.
            </p>
          </div>

          <div className="opd-timing">
            <h3>OPD Timings</h3>
            <p>Monday – Saturday</p>
            <h2>9:00 AM – 5:00 PM</h2>
            <small>
              Please confirm actual timings with the hospital.
            </small>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>About Our College</h3>
            <p>
              Providing quality medical education, practical
              training and healthcare services to the community.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick Info</h3>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/academics">Academics</a>
            <a href="/admissions">Admissions</a>
            <a href="/departments">Departments</a>
            <a href="/hospital">Hospital &amp; OPD</a>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>📍 College Address, Sangli, Maharashtra</p>
            <p>☎ Phone: Add official phone number</p>
            <p>✉ Email: Add official email address</p>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <p>Connect with us on social media.</p>

            <div className="social-links">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="social-icon facebook"
              >
                f
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="social-icon instagram"
              >
                ◎
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X or Twitter"
                className="social-icon twitter"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Medical College.
            All Rights Reserved.
          </p>
          <p>Designed for quality education and healthcare.</p>
        </div>
      </footer>
    </>
  );
}
