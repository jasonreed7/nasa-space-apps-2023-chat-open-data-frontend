import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import BotMessage from "./components/BotMessage";
import Input from "./components/Input";
import Messages from "./components/Messages";
import UserMessage from "./components/UserMessage";

import API from "./ChatbotAPI";

import Header from "./components/Header";
import "./styles.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={() => "Hi, what kind of datasets are you looking for?"}
        />,
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async (text) => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => {
          const resp = await API.GetChatbotResponse(text);

          let message = await resp.text();
          console.log(message);
          message = message.replaceAll("\\n", "<br />");
          return message;
        }}
      />
    );
    setMessages(newMessages);
  };

  return (
    <div className="chatbot">
      <Header />
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Chatbot />, rootElement);
