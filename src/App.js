import { useState } from "react";
import "./App.css";
import ChatLog from "./components/chatlog";

function App() {
  const [chatLine, setChatLine] = useState({});
  const [chatLog, setChatLog] = useState([]);
  const [incharge, setIncharge] = useState("")
  function sendHandle() {
    setChatLog((prev) => [...prev, chatLine]);
    setChatLine({ message: "", id: "" });
  }

  function changeAccounthandler() {
    if (localStorage.getItem("username") == "testcase01") {
      localStorage.setItem("username", "testcase02");
    } else {
      localStorage.setItem("username", "testcase01");
    }

    setIncharge(localStorage.getItem("username"))
  }

  return (
    <div>
      <div className="chat-box">
        <div className="chat-content-box">
          <ChatLog
            chatLine={chatLine}
            setChatLine={setChatLine}
            chatLog={chatLog}
            setChatLog={setChatLog}
          />
        </div>
        <input
          value={chatLine.message}
          onChange={(e) =>
            setChatLine({
              message: e.target.value,
              id: localStorage.getItem("username"),
            })
          }
          type="text"
          placeholder="things"
        ></input>
        <button
          className="a-btn"
          onClick={() => {
            sendHandle();
          }}
        >
          Submit this
        </button>
      </div>
      <button
        className="change-account-btn"
        onClick={() => {
          changeAccounthandler();
        }}
      >
        Change to {incharge}
      </button>
    </div>
  );
}

export default App;
