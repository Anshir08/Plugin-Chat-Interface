import React from "react";
import calculation from "../plugins/calculation";
import dictionary from "../plugins/dictionary";
import weather from "../plugins/weather";
import { useState } from "react";

const Interface = () => {
  const [messages, setMessages] = useState(() => {
    const storedMessages = localStorage.getItem("messages");
    return storedMessages ? JSON.parse(storedMessages) : [];
  });

  const handlePlugin = async (plugin) => {
    let pluginType;
    let pluginContent;
    try {
      pluginType = plugin.split(" ")[0];
      pluginContent = plugin.split(" ").slice(1).join(" ");
    } catch (error) {
      console.error("Error parsing plugin:", error);
      return;
    }

    let response;
    if (pluginType === "calc") {
      response = await calculation({ expression: pluginContent });
    } else if (pluginType === "define") {
      response = await dictionary({ word: pluginContent });
    } else if (pluginType === "weather") {
      response = await weather({ city: pluginContent });
    } else {
      response = `Unknown plugin type: ${pluginType}`;
    }
    return response;
  };

  // eventlistener for pressing enter
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      let value = event.target.value;
      if (!value) {
        console.error("No plugin or message entered");
        return;
      }

      try {
        let response = await handlePlugin(value);
        setMessages((prevMessages) => {
          let newMessages = [
            ...prevMessages,
            { input: value, output: response },
          ];

          localStorage.setItem("messages", JSON.stringify(newMessages));

          return newMessages;
        });
        event.target.value = "";
        event.target.blur();
      } catch (error) {
        console.error("Error handling plugin:", error);
      }
    }
  };

  return (
    <div className="Interface">
      <div className="messages-container">
      {messages.map((message, index) => (
        <div className="Message" key={index}>
          <div className="input">{message.input}</div>
          <div className="output">{message.output}</div>
        </div>
      ))}
      </div>
      {
        <input
          onKeyDown={handleKeyDown}
          className="Message-box"
          placeholder="Enter plugin(calc, define, weather) before message"
        />
      }
    </div>
  );
};

export default Interface;

//  _________________________________________
// |                                       \|
// |                      ---------------  \|
// |                        INPUT          \|
// |                                       \|
// |                      ---------------  \|
// |                                       \|
// | ---------------                       \|
// |                                       \|
// |   OUTPUT                              \|
// | ---------------                       \|
// |  -----------------------------------  \|
// |       Enter Message Here              \|
// |  -----------------------------------  \|
// |_______________________________________\|
