
import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    {
      text: "Aarogya Care",
      handler: props.actionProvider.handleJavascriptList,
      id: 1,
    },
    { 
      text: "Cancer", 
      handler: props.actionProvider.handleJavascriptList1, 
      id: 2 
    },
    { 
      text: "Cholesterol", 
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
