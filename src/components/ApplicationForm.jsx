import React, { useState } from "react";

export default function ApplicationForm({ userData, onSubmit, onBack }) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: userData?.name || "",
    email: userData?.email || "",
    phone: "",
    course: "",
    college: "",
    income: "",
    documents: {
      aadhaar: false,
      incomeCert: false,
      marksheet: false,
    },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDocumentUpload = (doc) => {
    setFormData({
      ...formData,
      documents: { ...formData.documents, [doc]: true },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📝 Scholarship Application Form</h2>

      {step === 1 && (
        <div>
          <h3>👤 Personal Information</h3>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <br /><br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br /><br />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <br /><br />

          <button onClick={() => setStep(2)}>Next ➡️</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3>🎓 Academic Information</h3>

          <input
            type="text"
            name="course"
            placeholder="Course"
            value={formData.course}
            onChange={handleChange}
          />
          <br /><br />

          <input
            type="text"
            name="college"
            placeholder="College Name"
            value={formData.college}
            onChange={handleChange}
          />
          <br /><br />

          <input
            type="number"
            name="income"
            placeholder="Annual Income"
            value={formData.income}
            onChange={handleChange}
          />
          <br /><br />

          <button onClick={() => setStep(1)}>⬅️ Back</button>
          <button onClick={() => setStep(3)} style={{ marginLeft: "10px" }}>
            Next ➡️
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3>📂 Document Upload</h3>

          <p>
            Aadhaar Card:{" "}
            {formData.documents.aadhaar ? "✅ Uploaded" : "❌ Not Uploaded"}
            {!formData.documents.aadhaar && (
              <button onClick={() => handleDocumentUpload("aadhaar")}>
                Upload
              </button>
            )}
          </p>

          <p>
            Income Certificate:{" "}
            {formData.documents.incomeCert ? "✅ Uploaded" : "❌ Not Uploaded"}
            {!formData.documents.incomeCert && (
              <button onClick={() => handleDocumentUpload("incomeCert")}>
                Upload
              </button>
            )}
          </p>

          <p>
            Marksheet:{" "}
            {formData.documents.marksheet ? "✅ Uploaded" : "❌ Not Uploaded"}
            {!formData.documents.marksheet && (
              <button onClick={() => handleDocumentUpload("marksheet")}>
                Upload
              </button>
            )}
          </p>

          <button onClick={() => setStep(2)}>⬅️ Back</button>
          <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
            🚀 Submit Application
          </button>
        </div>
      )}

      <br />
      <button onClick={onBack}>🏠 Back to Home</button>
    </div>
  );
}
