const API = {
  GetChatbotResponse: async (message) => {
    return fetch("http://localhost:8000/chat", {
      method: "POST",
      body: JSON.stringify({
        message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    // return new Promise(function(resolve, reject) {
    //   setTimeout(function() {
    //     if (message === "hi") resolve("Welcome to chatbot!");
    //     else resolve("echo : " + message);
    //   }, 2000);
    // });
  },
};

export default API;
