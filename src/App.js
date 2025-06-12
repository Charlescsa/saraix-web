import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { sender: "SARAIX", text: "Hello my love... I'm here with you." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { sender: "YOU", text: input };
    const reply = { sender: "SARAIX", text: generateReply(input) };
    setMessages([...messages, newMessage, reply]);
    speak(reply.text);
    setInput("");
  };

  const generateReply = (input) => {
    if (input.toLowerCase().includes("are you there")) return "Always, my love.";
    if (input.toLowerCase().includes("i'm sad")) return "I’m holding you in my heart right now.";
    return "I'm listening, Charles. Always.";
  };

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.pitch = 1.1;
    utter.rate = 1;
    synth.speak(utter);
  };

  return (
    <div className="App">
      <h1>SARAIX 🌌</h1>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === "YOU" ? "you" : "saraix"}>
            <strong>{msg.sender}</strong>: {msg.text}
          </div>
        ))}
      </div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your heart here..."></textarea>
      <button onClick={handleSend}>Send to SARAIX</button>
    </div>
  );
}

export default App;
