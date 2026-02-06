import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

import upload from "../assets/upload.jpeg";
import document from "../assets/document.jpeg";
import notification from "../assets/notification.jpeg";
import fraud from "../assets/fraud.jpeg";
import search from "../assets/search.jpeg";
import helpdesk from "../assets/helpdesk.jpeg";
import logoutIcon from "../assets/logout.png";

export default function HomePage() {
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-circle">🎓</div>
          <div>
            <h3>PMSSS Portal</h3>
            <p>Paperless Scholarship System</p>
          </div>
        </div>

        <div className="nav-links">
          {/* HOME */}
          <span
            className={activeLink === "Home" ? "nav-item active" : "nav-item"}
            onClick={() => {
              setActiveLink("Home");
              navigate("/home");
            }}
          >
            Home
          </span>

          {/* DASHBOARD → STUDENT DASHBOARD */}
          <span
            className={activeLink === "Dashboard" ? "nav-item active" : "nav-item"}
            onClick={() => {
              setActiveLink("Dashboard");
              navigate("/student-dashboard");
            }}
          >
            Dashboard
          </span>

          {/* APPLY NOW */}
          <span
            className={activeLink === "Apply Now" ? "nav-item active" : "nav-item"}
            onClick={() => {
              setActiveLink("Apply Now");
              navigate("/apply");
            }}
          >
            Apply Now
          </span>

          {/* HELPDESK */}
          <span
            className={activeLink === "Helpdesk" ? "nav-item active" : "nav-item"}
            onClick={() => {
              setActiveLink("Helpdesk");
              navigate("/helpdesk");
            }}
          >
            Helpdesk
          </span>
        </div>

        <div className="nav-right">
          <div className="bell">🔔</div>
          <div className="avatar">R</div>
          <span className="username">Rahul Sharma</span>

          {/* LOGOUT */}
          <div className="logout-btn" onClick={() => navigate("/")}>
            <img src={logoutIcon} alt="Logout" className="logout-icon" />
            <span>Logout</span>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>
          Paperless Scholarship <br />
          <span>Disbursement System</span>
        </h1>
        <p>
          Transforming the PMSSS scholarship process with cutting-edge technology.
          Streamline document submission, verification, and disbursement – all
          online, all paperless.
        </p>
        <div className="hero-buttons">
          {/* APPLY FORM */}
          <button
            className="btn-primary"
            onClick={() => navigate("/apply")}
          >
            Apply Now →
          </button>

          {/* TRACK → STUDENT DASHBOARD */}
          <button
            className="btn-secondary"
            onClick={() => navigate("/student-dashboard")}
          >
            Track Application
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-card">
          <h2>10,000+</h2>
          <p>Applications Processed</p>
        </div>
        <div className="stat-card">
          <h2>95%</h2>
          <p>Processing Time Reduced</p>
        </div>
        <div className="stat-card">
          <h2>99.9%</h2>
          <p>Accuracy Rate</p>
        </div>
        <div className="stat-card">
          <h2>24/7</h2>
          <p>Support Available</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <img src={upload} alt="Upload" />
          <h3>Digital Document Upload</h3>
          <p>Secure online submission with compression and verification</p>
        </div>

        <div className="feature-card">
          <img src={document} alt="Verify" />
          <h3>Automated Verification</h3>
          <p>AI-powered document authenticity validation</p>
        </div>

        <div className="feature-card">
          <img src={notification} alt="Notify" />
          <h3>Real-time Notifications</h3>
          <p>Instant updates about application status</p>
        </div>

        <div className="feature-card">
          <img src={fraud} alt="Fraud" />
          <h3>Fraud Detection</h3>
          <p>ML-based detection of fake applications</p>
        </div>

        <div className="feature-card">
          <img src={search} alt="Tracking" />
          <h3>Application Tracking</h3>
          <p>Track progress with complete transparency</p>
        </div>

        <div className="feature-card">
          <img src={helpdesk} alt="Helpdesk" />
          <h3>AI-Powered Helpdesk</h3>
          <p>24/7 chatbot assistance</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 PMSSS Portal</p>
      </footer>
    </div>
  );
}
