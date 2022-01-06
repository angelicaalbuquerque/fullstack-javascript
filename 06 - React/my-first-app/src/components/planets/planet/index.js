import React from "react";
import DescriptonWithLink from "../../shared/DescriptionWithLink";
import GrayImg from "../../shared/gray_img";

const Planet = (props) => {
  return (
    <div onClick={() => props.clickOnPlanet(props.name)}>
      <h4>{props.name}</h4>
      <DescriptonWithLink
        description={props.description}
        link={props.link}
        link_description={props.link_description}
      />
      <GrayImg img_url={props.img_url} />
    </div>
  );
};

export default Planet;
