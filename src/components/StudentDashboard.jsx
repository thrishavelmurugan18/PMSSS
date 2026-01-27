import { useNavigate } from "react-router-dom";
import "../styles/studentDashboard.css";
import backIcon from "../assets/back.png";
import logoutIcon from "../assets/logout.png";

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <div className="dashboard-content">

        {/* HEADER */}
        <div className="dashboard-header">
          <div className="header-left">
            <img
              src={backIcon}
              alt="Back"
              className="back-icon"
              onClick={() => navigate("/home")}
            />
            <div>
              <h2>Student Dashboard</h2>
              <p>Welcome, Rahul Sharma</p>
            </div>
          </div>

          <div className="header-right">
            <div className="notification">
              🔔
              <span className="badge">3</span>
            </div>

            <div className="logout-btn" onClick={() => navigate("/login")}>
              <img src={logoutIcon} alt="Logout" />
              <span>Logout</span>
            </div>
          </div>
        </div>

        {/* TITLE */}
        <div className="page-title">
          <h1>My Applications</h1>
          <p>Track your application progress and manage documents</p>
        </div>

        {/* TABS */}
        <div className="tabs">
          <button className="active">Applications</button>
          <button>Notifications</button>
          <button>Documents</button>
        </div>

        {/* APPLICATION 1 */}
        <div className="application-card">
          <div className="left">
            <h3>
              Rahul Sharma <span className="status yellow">Under Review</span>
            </h3>
            <p>APP-2024-001</p>
            <p>Submitted: 2024-01-15</p>
          </div>
          <div className="right">
            <div className="progress-header">
              <span>Progress</span>
              <span className="percent">75%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "75%" }} />
            </div>
            <p>5 of 6 documents verified</p>
          </div>
        </div>

        {/* APPLICATION 2 */}
        <div className="application-card">
          <div className="left">
            <h3>
              Priya Patel <span className="status green">Approved</span>
            </h3>
            <p>APP-2024-002</p>
            <p>Submitted: 2024-01-14</p>
          </div>
          <div className="right">
            <div className="progress-header">
              <span>Progress</span>
              <span className="percent">100%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "100%" }} />
            </div>
            <p>6 of 6 documents verified</p>
          </div>
        </div>

        {/* APPLICATION 3 */}
        <div className="application-card">
          <div className="left">
            <h3>
              Amit Kumar <span className="status orange">Pending</span>
            </h3>
            <p>APP-2024-003</p>
            <p>Submitted: 2024-01-13</p>
          </div>
          <div className="right">
            <div className="progress-header">
              <span>Progress</span>
              <span className="percent">40%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "40%" }} />
            </div>
            <p>4 of 6 documents verified</p>
          </div>
        </div>

      </div>
    </div>
  );
}
