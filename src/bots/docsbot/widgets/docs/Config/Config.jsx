import React, { useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";

import GistContainer from "../../GistContainer/GistContainer";

import styles from "./Config.module.css";

const Config = ({ gist, setState }) => {
  useEffect(() => {
    setState((state) => ({ ...state, gist: "config" }));
  }, [setState]);

  const showActionProviderGist = gist === "config";

  return (
    <div>
      <a
        href="https://gist.github.com/Sahilguleria12/ba1c176aebf98348fc411c57fc8069a8.js"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.configLink}
      >
        View 
      </a>
      <ConditionallyRender
        ifTrue={showActionProviderGist}
        show={<GistContainer gistId="ba1c176aebf98348fc411c57fc8069a8" />}
      />
    </div>
  );
};

export default Config;
