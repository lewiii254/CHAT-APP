import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const App = () => {
  const [message, setMessage] = useState("");
  const socket = io.connect(`http://localhost:4000`);
  const [receivedMessages, setReceivedMessages] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceivedMessages(data.message);
    });
  }, [socket]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type a message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button onClick={sendMessage}>Send Message</button>
      <div>
        <h2>{receivedMessages}</h2>
      </div>
    </div>
  );
};

export default App;

