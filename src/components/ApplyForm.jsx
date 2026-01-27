import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/apply.css";
import upload1 from "../assets/upload1.png";

export default function ApplyForm() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="apply-container">
      <div className="apply-wrapper">

        {/* HEADER */}
        <div className="apply-header">
          <span className="back-btn" onClick={() => navigate("/student-dashboard")}>
            ← Back to Dashboard
          </span>

          <div className="title">
            <h2>New Application</h2>
            <p>Step {step} of 3</p>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="form-card">
            <div className="step-header">
              <div className="step-circle">1</div>
              <h3>Personal Information</h3>
            </div>
            <p>Please provide your personal details</p>

            <div className="grid">
              <div>
                <label>Full Name *</label>
                <input type="text" placeholder="Full Name" />
              </div>

              <div>
                <label>Date of Birth *</label>
                <input type="date" />
              </div>

              <div>
                <label>Email *</label>
                <input type="email" placeholder="Email" />
              </div>

              <div>
                <label>Phone Number *</label>
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>

            <div>
              <label>Address *</label>
              <textarea placeholder="Enter full address"></textarea>
            </div>

            <div className="actions">
              <button className="primary" onClick={() => setStep(2)}>
                Next: Academic Information →
              </button>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="form-card">
            <div className="step-header">
              <div className="step-circle">2</div>
              <h3>Academic Information</h3>
            </div>
            <p>Please provide your academic details</p>

            <div className="grid">
              <div>
                <label>10th Marks (%) *</label>
                <input type="text" />
              </div>

              <div>
                <label>12th Marks (%) *</label>
                <input type="text" />
              </div>

              <div>
                <label>Current Course *</label>
                <select>
                  <option>Select course</option>
                  <option>B.Tech</option>
                  <option>B.Sc</option>
                  <option>B.Com</option>
                </select>
              </div>

              <div>
                <label>College / University *</label>
                <input type="text" />
              </div>
            </div>

            <div>
              <label>Annual Family Income *</label>
              <input type="text" placeholder="₹" />
            </div>

            <div className="actions">
              <button className="secondary" onClick={() => setStep(1)}>
                Previous
              </button>
              <button className="primary" onClick={() => setStep(3)}>
                Next: Documents →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="form-card">
            <div className="step-header">
              <div className="step-circle">3</div>
              <h3>Document Upload</h3>
            </div>
            <p>Upload required documents</p>

            {[
              "Aadhaar Card",
              "Income Certificate",
              "Marksheet (10th)",
              "Marksheet (12th)",
              "Bank Passbook",
              "College ID",
            ].map((doc, index) => (
              <div className="upload-row" key={index}>
                <div className="upload-left">
                  <span>{doc} *</span>
                </div>

                <button className="upload-btn">
                  <img src={upload1} alt="upload" className="upload-icon-img" />
                  <span>Upload</span>
                </button>
              </div>
            ))}

            <div className="actions">
              <button className="secondary" onClick={() => setStep(2)}>
                Previous
              </button>
              <button
                className="primary"
                onClick={() => navigate("/student-dashboard")}
              >
                Submit Application
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
