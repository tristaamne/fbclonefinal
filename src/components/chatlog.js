import React, { useState } from "react";
import "./chatlog.css";

function ChatLog({chatLine, setChatLine, chatLog, setChatLog}) {
  const testArr = [];
// this is mah test
  return (
    <div className="chat-line">
      {chatLog.map((e, index) => {
        return (
          <div className="chatBox" key={index}>
            <p className={e.id ===localStorage.getItem("username") ? "home" : "guest"}>
             {e.message}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ChatLog;
