import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";
import Gist from "react-gist";

import image from '../../../../../assets/img/chatbot-4071274_1920.jpg';

import logo from '../../../../../assets/img/chatbot-4071274_1920.jpg';

import { ReactComponent as ActionProviderOverview } from "../../../../../assets/img/actionprovider-overview.svg";

import styles from "./ActionProviderDocs.module.css";
import InformationBox from "../../InformationBox/InformationBox";

import AppDup1 from "./AppDup1";

const ActionProviderDocs = ({ infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "actionProvider",
    }));
  }, [setState]);

  const showActionProviderInfoBox = infoBox === "actionProvider";

  return (
    <div>
      <FadeIn left by={250}>
        <ActionProviderOverview className={styles.overviewSVG} />
      </FadeIn>

      <ConditionallyRender
        ifTrue={showActionProviderInfoBox}
        show={
          <InformationBox setState={setState}>
            <p className={styles.infoBoxParagraph}>
             
            </p>
           
           
            <AppDup1 />
            
           
          </InformationBox>
        }
      />
    </div>
  );
};

export default ActionProviderDocs;
