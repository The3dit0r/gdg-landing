import { useEffect, useState } from "react";
import "./index.css";

import Icon from "../../components/Icon";

import { ChatType } from "./context";
import Markdown from "react-markdown";

export default function ChattingSection(props: ChatType) {
  const [query, setQuery] = useState("");
  const { messages, showChat, setShowChat, addMessage, loading } = props;

  const clssArr = ["chatting-box-float"];
  if (showChat) {
    clssArr.push("active");
  }

  function handleInput(e: any) {
    setQuery(e.target.value);
  }

  function sendProcedure() {
    addMessage(query.trim(), true);
    setQuery("");
  }

  useEffect(() => {
    const t = document.getElementById("jat");
    t?.scrollTo({ top: t?.scrollHeight || 1e17 });
  }, [messages.length, loading]);

  return (
    <div className={clssArr.join(" ")}>
      <div className="header flex aictr g16">
        <Icon name="close" size={40} onClick={() => setShowChat(false)} />
        <div>
          <h2>GDG Assistant</h2>
          <div>Your assistant powered by AI</div>
        </div>
      </div>
      <div
        style={{ padding: 16, overflowY: "auto" }}
        className="test flexing"
        id="jat"
      >
        {messages.map((a, i) => (
          <Message {...a} key={i} />
        ))}

        {!loading || <Message idle message="" />}
      </div>

      <div className="user-input flex aictr">
        <input
          placeholder="Ex: What are some events that the club will host in the future?"
          onKeyDown={(e) => {
            if (e.key !== "Enter" || loading) {
              return;
            }

            sendProcedure();
          }}
          onInput={handleInput}
          onChange={handleInput}
          value={query}
        />
        <div
          className={query.trim().length ? "btt" : "btt disabled"}
          onClick={sendProcedure}
        >
          <Icon name="send" />
        </div>
      </div>
    </div>
  );
}

function Message({
  is_user,
  message,
  timestamp,
  idle = false,
}: {
  is_user?: boolean;
  timestamp?: number;
  message: string;
  idle?: boolean;
}) {
  return (
    <div className={"message-wrap fade-in" + (is_user ? " user" : " assist")}>
      <div className={"avatar"}></div>
      <div>
        <div className="tag-name">
          {is_user ? "You" : "GDGoC Assistant"}
          {!timestamp || " | " + new Date(timestamp).toLocaleTimeString()}
        </div>
        {idle ? (
          <div className="idle message"> </div>
        ) : (
          <div className="message">
            {is_user ? message : <Markdown>{message}</Markdown>}
          </div>
        )}
      </div>
    </div>
  );
}
