import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { GiHelp } from "react-icons/gi";
import { GiLoveInjection } from "react-icons/gi";
import { RiSendPlaneFill } from "react-icons/ri";

import { STRINGS } from "./strings.js";
import { URL } from "./url.js";

function Header() {
  let { appTitle, findSlot, startNotifier } = STRINGS;
  let { FORM, GIT, VAC, TRAC } = URL;

  let hrefs = {
    [FORM]: <GiHelp className="right-logo" />,
    [GIT]: <GoMarkGithub className="right-logo" />,
    [VAC]: <GiLoveInjection className="right-logo" />,
    [TRAC]: <RiSendPlaneFill className="right-logo" />
  };

  let renderHref = (child, url) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="right-logo"
    >
      {child}
    </a>
  );

  return (

    <div >
      <div className="App-header">
        <h1>{appTitle}</h1>
      </div>
      <p>
        <label className="find-slot">{findSlot}</label>
        <br />
        <label className="start-notifier">{startNotifier}</label>
      </p>
      <div className="right-logo-section navbar">
        {Object.keys(hrefs).map((url) => renderHref(hrefs[url], url))}
      </div>
    </div>
  );
}

export default Header
