import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";
import Gist from "react-gist";

import image from '../../../../../assets/img/chatbot-4071274_1920.jpg';

import logo from '../../../../../assets/img/chatbot-4071274_1920.jpg';

import { ReactComponent as ActionProviderOverview } from "../../../../../assets/img/actionprovider-overview.svg";

import styles from "./aidocs.module.css";
import InformationBox from "../../InformationBox/InformationBox";

import AppDup4 from "./AppDup4";

const AI = ({ infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "ai",
    }));
  }, [setState]);

  const showActionProviderInfoBox = infoBox === "ai";

  return (
    <div>
     

      <ConditionallyRender
        ifTrue={showActionProviderInfoBox}
        show={
          <InformationBox setState={setState}>
            <AppDup4 />
           
           
            
            
           
          </InformationBox>
        }
      />
    </div>
  );
};

export default AI;
