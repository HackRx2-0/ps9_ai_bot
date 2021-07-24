import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";


import Overview from "./widgets/Overview/Overview";
import MessageParserDocs from "./widgets/docs/MessageParserDocs/MessageParserDocs";
import ActionProviderDocs from "./widgets/docs/ActionProviderDocs/ActionProviderDocs";
import Config from "./widgets/docs/Config/Config";
import WidgetDocs from "./widgets/docs/WidgetDocs/WidgetDocs";

//TESTING ..

import EXTRADocs from "./widgets/docs/EXTRADocs/EXTRADocs";
import AIDOCS from "./widgets/docs/aidocs/aidocs";
import VTTDOCS from "./widgets/docs/vttdocs/vttdocs";
import SPDOCS from "./widgets/docs/spdocs/spdocs";
import QDOCS from "./widgets/docs/qdocs/qdocs";

// TESTING ...


const botName = "Bajaj ChatBot";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hello`
    ),
    createChatBotMessage(
      `I'm ${botName}. I’m here to help you.`
    ),
    createChatBotMessage(
      `Here You will find Product as well as Product information`
     
    ),
    createChatBotMessage(
      `Enter -> (help)   if you do not know how to operate it`
     
    ),
    createChatBotMessage(
      "You can also find the product with Product Code",
      {
        withAvatar: false,
        delay: 2000,
        widget: "overview",
      }
    ),
    
  ],
  state: {
    gist: "",
    infoBox: "",
  },
  customComponents: {},
  widgets: [
   
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["gist"],
    },
    
    {
      widgetName: "messageParser",
      widgetFunc: (props) => <MessageParserDocs {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    {
      widgetName: "actionProviderDocs",
      widgetFunc: (props) => <ActionProviderDocs {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    {
      widgetName: "config",
      widgetFunc: (props) => <Config {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    {
      widgetName: "widget",
      widgetFunc: (props) => <WidgetDocs {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    
    //TESTING ..
    {
      widgetName: "EXTRA",
      widgetFunc: (props) => <EXTRADocs {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    
    //TESTING ..
    {
      widgetName: "AI",
      widgetFunc: (props) => <AIDOCS {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },

    {
      widgetName: "VTT",
      widgetFunc: (props) => <VTTDOCS {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },

    {
      widgetName: "SP",
      widgetFunc: (props) => <SPDOCS {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },

    {
      widgetName: "Q",
      widgetFunc: (props) => <QDOCS {...props} />,
      mapStateToProps: ["gist", "infoBox"],
    },
    
  ],
};

export default config;
