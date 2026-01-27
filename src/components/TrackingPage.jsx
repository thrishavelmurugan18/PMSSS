import React, { useState } from "react";

export default function TrackingPage({ onBack }) {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState(null);

  // Dummy data (you can later connect this with real backend)
  const applications = [
    {
      id: "APP-001",
      name: "Rahul Sharma",
      status: "Under Review",
      progress: 70,
      message: "Your documents are being verified.",
    },
    {
      id: "APP-002",
      name: "Priya Patel",
      status: "Approved",
      progress: 100,
      message: "Your scholarship has been approved 🎉",
    },
    {
      id: "APP-003",
      name: "Amit Kumar",
      status: "Rejected",
      progress: 100,
      message: "Your application was rejected due to missing documents.",
    },
  ];

  const handleTrack = () => {
    const app = applications.find(
      (a) => a.id.toLowerCase() === trackingId.toLowerCase()
    );

    if (app) {
      setResult(app);
    } else {
      setResult({
        error: true,
        message: "❌ No application found with this Tracking ID",
      });
    }
  };

  const getStatusColor = (status) => {
    if (status === "Approved") return "green";
    if (status === "Under Review") return "orange";
    if (status === "Rejected") return "red";
    return "gray";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📍 Track Your Application</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Enter Tracking ID (e.g. APP-001)"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          style={{ padding: "6px", width: "250px" }}
        />
        <button onClick={handleTrack} style={{ marginLeft: "10px" }}>
          🔍 Track
        </button>
      </div>

      {result && !result.error && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "8px",
            background: "#f9f9f9",
            maxWidth: "400px",
          }}
        >
          <p>
            <b>👤 Name:</b> {result.name}
          </p>
          <p>
            <b>🆔 Application ID:</b> {result.id}
          </p>
          <p>
            <b>Status:</b>{" "}
            <span style={{ color: getStatusColor(result.status) }}>
              {result.status}
            </span>
          </p>

          {/* Progress bar */}
          <div
            style={{
              background: "#ddd",
              height: "10px",
              borderRadius: "5px",
              marginTop: "5px",
            }}
          >
            <div
              style={{
                width: `${result.progress}%`,
                height: "10px",
                background: "purple",
                borderRadius: "5px",
              }}
            ></div>
          </div>
          <p>{result.progress}% completed</p>

          <p>ℹ️ {result.message}</p>
        </div>
      )}

      {result && result.error && (
        <p style={{ color: "red" }}>{result.message}</p>
      )}

      <br />
      <button onClick={onBack}>⬅️ Back</button>
    </div>
  );
}
