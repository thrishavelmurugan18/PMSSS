import "../styles/admin.css";
import backIcon from "../assets/back.png";

export default function AdminDashboard() {
  const applications = [
    {
      name: "Rahul Sharma",
      status: "Pending",
      risk: "Low Risk",
      email: "rahul.sharma@email.com",
      phone: "+91 98765 43210",
      score: "92.5%",
      income: "₹3,50,000",
      course: "B.Tech Computer Science",
      college: "IIT Delhi",
      docs: "4/6 verified",
      submitted: "2024-01-15",
      color: "orange"
    },
    {
      name: "Priya Patel",
      status: "Under Review",
      risk: "Low Risk",
      email: "priya.patel@email.com",
      phone: "+91 98765 43211",
      score: "95.8%",
      income: "₹4,00,000",
      course: "MBBS",
      college: "AIIMS Delhi",
      docs: "6/6 verified",
      submitted: "2024-01-14",
      color: "blue"
    },
    {
      name: "Amit Kumar",
      status: "Pending",
      risk: "Medium Risk",
      email: "amit.kumar@email.com",
      phone: "+91 98765 43212",
      score: "88.3%",
      income: "₹2,80,000",
      course: "B.Sc Physics",
      college: "Delhi University",
      docs: "5/5 verified",
      submitted: "2024-01-13",
      color: "orange"
    },
    {
      name: "Sneha Reddy",
      status: "Approved",
      risk: "Low Risk",
      email: "sneha.reddy@email.com",
      phone: "+91 98765 43213",
      score: "90.1%",
      income: "₹3,00,000",
      course: "B.Arch",
      college: "SPA Delhi",
      docs: "6/6 verified",
      submitted: "2024-01-12",
      color: "green"
    },
    {
      name: "Vikram Singh",
      status: "Rejected",
      risk: "High Risk",
      email: "vikram.singh@email.com",
      phone: "+91 98765 43214",
      score: "85%",
      income: "₹8,00,000",
      course: "B.Com",
      college: "SRCC Delhi",
      docs: "6/6 verified",
      submitted: "2024-01-11",
      color: "red"
    }
  ];

  return (
    <div className="admin-container">

      {/* Header */}
      <div className="admin-header">
        <div className="admin-header-left">
          <div className="title-row">
            <div className="back-btn" onClick={() => window.history.back()}>
              <img src={backIcon} alt="Back" />
              <span>Back</span>
            </div>
            <h2>Admin Dashboard</h2>
          </div>
          <p>Paperless Scholarship Management System</p>
        </div>

        <div className="admin-header-right">
          <button className="export-btn">⬇ Export Report</button>
          <div className="profile-icon">A</div>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card blue">
          <h3>1,247</h3>
          <p>Total Applications</p>
        </div>
        <div className="stat-card yellow">
          <h3>234</h3>
          <p>Pending Review</p>
        </div>
        <div className="stat-card green">
          <h3>980</h3>
          <p>Approved</p>
        </div>
        <div className="stat-card red">
          <h3>33</h3>
          <p>Rejected</p>
        </div>
      </div>

      {/* Search */}
      <div className="search-bar">
        <input placeholder="Search by name or application ID..." />
        <div className="filter-buttons">
          <button className="active">All</button>
          <button>Pending</button>
          <button>Under Review</button>
          <button>Approved</button>
        </div>
      </div>

      {/* Application Cards */}
      {applications.map((app, i) => (
        <div key={i} className="application-card">
          <div className="card-left">
            <div className="name-row">
              <h3>{app.name}</h3>
              <span className={`status ${app.color}`}>{app.status}</span>
              <span className="risk">{app.risk}</span>
            </div>

            <p><strong>APP ID:</strong> APP-2024-{1247 - i}</p>
            <p>Email: {app.email}</p>
            <p>Phone: {app.phone}</p>
            <p>Course: {app.course} • College: {app.college}</p>
            <p>Documents: {app.docs}</p>
            <p>Submitted: {app.submitted}</p>
          </div>

          <div className="card-right">
            <p>
              <strong>Score:</strong>{" "}
              <span className="score">{app.score}</span>
            </p>
            <p><strong>Income:</strong> {app.income}</p>
            <div className="actions">
              <button className="view-btn">👁 View</button>
              <button className="review-btn">Review</button>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
