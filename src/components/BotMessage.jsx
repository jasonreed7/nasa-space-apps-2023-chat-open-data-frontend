import React, { useEffect, useState } from "react";

export default function BotMessage({ fetchMessage }) {
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadMessage() {
      const msg = await fetchMessage();
      setLoading(false);
      setMessage(msg);
    }
    loadMessage();
  }, [fetchMessage]);

  return (
    <div className="message-container">
      <div className="bot-message" dangerouslySetInnerHTML={{ __html: isLoading ? "..." : `<div class="text-left">${message}</div>` }}></div>
    </div>
  );
}
