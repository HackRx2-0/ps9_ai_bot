import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";
import Gist from "react-gist";


import image from '../../../../../assets/img/chatbot-4071274_1920.jpg';

import logo from '../../../../../assets/img/chatbot-4071274_1920.jpg';

import { ReactComponent as ActionProviderOverview } from "../../../../../assets/img/actionprovider-overview.svg";

import styles from "./spdocs.module.css";
import InformationBox from "../../InformationBox/InformationBox";

import AppDup6 from "./App";

const SP = ({ infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "SP",
    }));
  }, [setState]);

  const showActionProviderInfoBox = infoBox === "SP";

  return (
    <div>
     

      <ConditionallyRender
        ifTrue={showActionProviderInfoBox}
        show={
          <InformationBox setState={setState}>
            <AppDup6 />
           
           
            
            
           
          </InformationBox>
        }
      />
    </div>
  );
};

export default SP;
