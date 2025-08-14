import React, { useState, useEffect } from "react";

import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";
import stsQA from "./stsData";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ text: "👋 Hi! Welcome to STS Institute! How can I help you today? 😊", sender: "bot" }]);
    }
  }, [open]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    // Find matching question
    const found = stsQA.find((qa) =>
      qa.question.toLowerCase().includes(input.toLowerCase())
    );

    const botMessage = found
      ? { text: found.answer, sender: "bot" }
      : { text: "🤔 Sorry, I’m not sure about that. Please contact our owner 📞 +91-9876543210 for details.", sender: "bot" };

    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <div>
      {/* Floating Button */}
      <div className="chatbot-button" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={22} /> : <FaComments size={22} />}
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">💬 STS Assistant</div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chatbot-message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input-container">
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

