import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

export default function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    console.log("Signup data:", formData);

    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-header">
          <h1>🎓 PMSSS Portal</h1>
          <p>Create a new account</p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="auth-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="auth-group">
            <label>I am a</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="student">🎓 Student</option>
              <option value="admin">🛡️ Admin</option>
            </select>
          </div>

          <div className="auth-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="auth-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="auth-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {error && <div className="auth-error">{error}</div>}

          <button className="auth-btn" type="submit">
            ✨ Sign Up
          </button>
        </form>

        <div className="auth-links">
          <button
            className="link-btn"
            onClick={() => navigate("/")}
          >
            Already have an account? Sign in
          </button>
        </div>

      </div>
    </div>
  );
}
