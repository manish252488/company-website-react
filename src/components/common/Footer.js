import React from "react";
import "./index.less";
import Bubbles from "./Particles/Bubbles";
const Footer = (props) => {
  return (
    <div className="footer">
      <div className="background">
        <Bubbles width={"100%"} />
      </div>
      <div className="content">
        <div className="col col1">heelo</div>
        <div className="col col2">heelo</div>
        <div className="col col3">heelo</div>
      </div>
      <div className="social-icons">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="bottom">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Footer;
