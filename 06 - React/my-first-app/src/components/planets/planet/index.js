import React from "react";
import GrayImg from "../../shared/gray_img";

const Planet = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.descripton}</p>
      <GrayImg img_url={props.img_url} />
    </div>
  );
};

export default Planet;
