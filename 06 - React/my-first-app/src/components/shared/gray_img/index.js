import React from "react";
import "./style.css";

const GrayImg = (props) => {
  return (
    <img className="gray-img" src={props.img_url} alt="Planeta Mercúrio" />
  );
};

export default GrayImg;
