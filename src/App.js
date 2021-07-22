import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import { ConditionallyRender } from "react-util-kit";
import Gist from "react-gist";


import GradientBackground from "./components/GradientBackground/GradientBackground";
import ConfigSection from "./components/pagesections/ConfigSection/ConfigSection";
import MessageParserSection from "./components/pagesections/MessageParserSection/MessageParserSection";
import ActionProviderSection from "./components/pagesections/ActionProviderSection/ActionProviderSection";
import WidgetSection from "./components/pagesections/WidgetSection/WidgetSection";
import ExamplesSection from "./components/pagesections/ExamplesSection/ExamplesSection";
import SaveDialogueSection from "./components/pagesections/SaveDialogueSection/SaveDialogueSection";
import TutorialSection from "./components/pagesections/TutorialSection/TutorialSection";
import Menu from "./components/Menu/Menu";

import { ReactComponent as Logo } from "./assets/icons/logo.svg";
import { ReactComponent as ButtonIcon } from "./assets/icons/robot.svg";

import config from "./bots/docsbot/config";
import MessageParser from "./bots/docsbot/MessageParser";
import ActionProvider from "./bots/docsbot/ActionProvider";

import "./App.css";

function App() {
  const [showChatbot, toggleChatbot] = useState(true);

  return (
    <div className="App">
      
       
       
       
       
        <div className="app-chatbot-container" >
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            }
          />
        </div>

        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button>

        
     
      
     
     
     
    </div>
  );
}

export default App;
