import "../styles/helpdesk.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Helpdesk() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hello Rahul Sharma! I'm your AI assistant. How can I help you today with your scholarship application?"
    }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { type: "user", text: input },
      { type: "ai", text: "Thanks for your message. Our team will guide you shortly." }
    ]);

    setInput("");
  };

  return (
    <div className="helpdesk-container">
      <div className="helpdesk-wrapper">

        {/* HEADER */}
        <div className="helpdesk-header">
          <span onClick={() => navigate(-1)} style={{ cursor: "pointer", color: "#6b4eff" }}>
            ← Back
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              background: "#7c3aed",
              color: "white",
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              display: "grid",
              placeItems: "center"
            }}>💬</div>
            <div>
              <h2>AI Helpdesk</h2>
              <p style={{ fontSize: "12px", color: "#6b7280" }}>Available 24/7</p>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="helpdesk-body">

          {/* CHAT */}
          <div className="chat-box">
            <h3>Chat with AI Assistant</h3>

            <div className="chat-area">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  {msg.type === "ai" && <div className="avatar">AI</div>}
                  <div className="text">{msg.text}</div>
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
              />
              <button onClick={sendMessage}>➤</button>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="helpdesk-sidebar">

            <div className="quick-links">
              <h4>Quick Links</h4>
              <button>📄 Application Guidelines</button>
              <button>✅ Eligibility Criteria</button>
              <button>❓ FAQ</button>
              <button>🔔 Important Dates</button>
            </div>

            <div className="faq">
              <h4>Frequently Asked Questions</h4>
              <p>Q: What documents do I need to upload?</p>
              <p>Q: How long does verification take?</p>
              <p>Q: What are the eligibility criteria?</p>
            </div>

            <div className="support">
              <h4>Still need help?</h4>
              <p>Email: support@pmsss.gov.in</p>
              <p>Helpline: 1800-XXX-XXXX</p>
              <p>Hours: Mon-Fri, 9AM - 6PM</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
