import React, { useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";
import Gist from "react-gist";

import Quiz from './components/Quiz'

import './styles.css';
import { QuizData } from './components/QuizData';


import styles from "./WidgetDocs.module.css";
import InformationBox from "../../InformationBox/InformationBox";

const WidgetDocs = ({ infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "widget",
    }));
  }, [setState]);

  const showWidgetInfoBox = infoBox === "widget";

  return (
    <div>
      <ConditionallyRender
        ifTrue={showWidgetInfoBox}
        show={
          <InformationBox setState={setState}>
            <div className="App">
            <Quiz />
            </div>
           
           
           
          </InformationBox>
        }
      />
    </div>
  );
};

export default WidgetDocs;
