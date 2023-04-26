import React, { useState } from "react";
import "./ChatInput.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }

    setInput("");
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={inputHandler}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
