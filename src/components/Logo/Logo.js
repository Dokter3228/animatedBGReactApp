import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./icons8-brain-out-100.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0" style={{ width: "150px" }}>
      <Tilt className="Tilt shadow-2">
        <div className="pa3" style={{ height: "150px" }}>
          <img
            style={{ paddingTop: "5px", width: 150 }}
            src={brain}
            alt="logo"
          />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
