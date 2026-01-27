import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/auth.css";
import view from "../assets/visible.png";
import hide from "../assets/hide.png";

export default function LoginPage({ setCurrentRole }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    // Save role globally (this is the important part)
    setCurrentRole(formData.role);

    // Redirect based on role
    if (formData.role === "student") {
      navigate("/student-dashboard");
    } else if (formData.role === "admin") {
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-header">
          <h1>🎓 PMSSS Portal</h1>
          <p>Paperless Scholarship Management System</p>
        </div>

        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Sign in to continue</p>

        <form onSubmit={handleSubmit}>

          {/* ROLE SELECT */}
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

          {/* EMAIL */}
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

          {/* PASSWORD */}
          <div className="auth-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={showPassword ? hide : view} alt="Toggle" />
              </button>
            </div>
          </div>

          {error && <div className="auth-error">{error}</div>}

          <button className="auth-btn" type="submit">
            🔐 Sign In
          </button>
        </form>

        <div className="auth-links">
          <a href="#">Forgot password?</a>
        </div>

      </div>
    </div>
  );
}
