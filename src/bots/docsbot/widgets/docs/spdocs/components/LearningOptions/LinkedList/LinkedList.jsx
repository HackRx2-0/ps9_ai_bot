import React from "react";

import "./LinkList.css";

const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="link-list-item-url"
      >
        {link.text}<br/>
        
        {link.label}<br/>
        <hr></hr>
        {link.paragraph}<br/>
        <hr></hr>
        {link.paragraph2}<br/>
        {link.label2}<br/>
        
      </a>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;
