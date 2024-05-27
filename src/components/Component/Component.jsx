/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Component = ({
  property1,
  className,
  frameClassName,
  logoTrapilClassName,
  levClassName,
  lycEBascanClassName,
  logoStefClassName,
  logoRabotClassName,
  creditAgricoleLogoClassName,
  logoGerimClassName,
  logoTrapilClassNameOverride,
  levClassNameOverride,
}) => {
  return (
    <div className={`component ${className}`}>
      <div className={`frame ${property1} ${frameClassName}`}>
        <img
          className="lyc-e-bascan"
          alt="Lyc e bascan"
          src={property1 === "frame-3" ? "/img/lev-2-1.png" : "/img/lyc-e-bascan-1.png"}
        />
        <img
          className="logo-STEF"
          alt="Logo STEF"
          src={property1 === "frame-3" ? "/img/lev-2-1.png" : "/img/logo-stef-1.png"}
        />
        <img
          className="logo-rabot"
          alt="Logo rabot"
          src={property1 === "frame-3" ? "/img/lev-2-1.png" : "/img/logo-rabot-1.png"}
        />
        <img
          className="credit-agricole-logo"
          alt="Credit agricole logo"
          src={property1 === "frame-3" ? "/img/lev-2-1.png" : "/img/credit-agricole-logo-1.png"}
        />
        <img
          className="logo-gerim"
          alt="Logo gerim"
          src={property1 === "frame-3" ? "/img/lev-2-1.png" : "/img/logo-gerim-1.png"}
        />
         <img
          className="logo-trapil"
          alt="Logo trapil"
          src={property1 === "frame-3" ? "/img/lev-2-1.png" : "/img/logo-trapil 1.png"}
        />
         <img
          className="logo-trapil"
          alt="Logo trapil"
          src={property1 === "frame-3" ? "/img/lev-2-1.png" : "/img/lev 1.png"}
        />
        {/* <img className={`logo-trapil ${logoTrapilClassName}`} alt="Logo trapil" src="/img/logo-trapil 1.png" /> */}
        <img className={`lev ${levClassName}`} alt="Lev" src="/img/lev-2-1.png" />
        <img
          className={`img ${lycEBascanClassName}`}
          alt="Lyc e bascan"
          src={property1 === "frame-3" ? "/img/lyc-e-bascan-2-1.png" : "/img/lev-2-1.png"}
        />
        <img
          className={`logo-STEF-2 ${logoStefClassName}`}
          alt="Logo STEF"
          src={property1 === "frame-3" ? "/img/logo-stef-2-1.png" : "/img/lev-2-1.png"}
        />
        <img
          className={`logo-rabot-2 ${logoRabotClassName}`}
          alt="Logo rabot"
          src={property1 === "frame-3" ? "/img/logo-rabot-2-1.png" : "/img/lev-2-1.png"}
        />
        <img
          className={`credit-agricole-logo-2 ${creditAgricoleLogoClassName}`}
          alt="Credit agricole logo"
          src={property1 === "frame-3" ? "/img/credit-agricole-logo-2-1.png" : "/img/lev-2-1.png"}
        />
        <img
          className={`logo-gerim-2 ${logoGerimClassName}`}
          alt="Logo gerim"
          src={property1 === "frame-3" ? "/img/logo-gerim-2-1.png" : "/img/lev-2-1.png"}
        />
        {/* <img className={`logo-trapil-2 ${logoTrapilClassNameOverride}`} alt="Logo trapil" src="/img/logo-trapil 1.png" /> */}
        <img className={`lev-2 ${levClassNameOverride}`} alt="Lev" src="/img/lev-2-1.png" />
      </div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["frame-2", "frame-3"]),
};
