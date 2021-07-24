import React from "react";
import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "SEARCH panel ...................",
      handler: props.actionProvider.handleQuery,
      id: 1,
    },
    
    {
      name: "LOANS",
      handler: props.actionProvider.handleConfigDocs,
      id: 2,
    },
    {
      name: "SEARCH : PRODUCT CODE",
      handler: props.actionProvider.handleActionProviderDocs,
      id: 3,
    },
    {
      name: "HELP --",
      handler: props.actionProvider.handleWidgetDocs,
      id: 4,
    },
    // TESTING ....
    {
      name: "HEALTH_ARTICLES",
      handler: props.actionProvider.handleEXTRA,
      id: 5,
    },
    // TESTING ...
    {
      name: "ASK TO : BAJAJ   AI",
      handler: props.actionProvider.handleAI,
      id: 6,
    },

    {
      name: "Voice To Text : Command",
      handler: props.actionProvider.handleVoicetoText,
      id: 7,
    },

    {
      name: "Search by Typing......",
      handler: props.actionProvider.handleSearchPanel,
      id: 8,
    },

    {
      name: "SHOP ON EMI STORE",
      handler: props.actionProvider.handleMessageParserDocs,
      id: 9,
    },

    
  ];

  return <Options options={options} />;
};

export default GeneralOptions;
