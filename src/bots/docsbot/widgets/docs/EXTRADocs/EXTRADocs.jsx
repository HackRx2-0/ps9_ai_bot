import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";
import Gist from "react-gist";

import image from '../../../../../assets/img/chatbot-4071274_1920.jpg';

import logo from '../../../../../assets/img/chatbot-4071274_1920.jpg';

import { ReactComponent as ActionProviderOverview } from "../../../../../assets/img/actionprovider-overview.svg";

import styles from "./EXTRADocs.module.css";
import InformationBox from "../../InformationBox/InformationBox";

import AppDup3 from "./AppDup3";

const EXTRA = ({ infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "EXTRA",
    }));
  }, [setState]);

  const showActionProviderInfoBox = infoBox === "EXTRA";

  return (
    <div>
     

      <ConditionallyRender
        ifTrue={showActionProviderInfoBox}
        show={
          <InformationBox setState={setState}>
            <AppDup3 />
           
           
            
            
           
          </InformationBox>
        }
      />
    </div>
  );
};

export default EXTRA;
