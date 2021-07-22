import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Mobiles on EMI",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { 
      text: "Laptops on EMI", 
      handler: props.actionProvider.handleJavascriptList1, 
      id: 2 
    },
    { 
      text: "Smart Watches on EMI", 
      handler: props.actionProvider.handleJavascriptList2, 
      id: 3 
    },
    
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;