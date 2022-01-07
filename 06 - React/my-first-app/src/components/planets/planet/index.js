import React from "react";
import DescriptonWithLink from "../../shared/DescriptionWithLink";
import GrayImg from "../../shared/gray_img";

const Planet = (props) => {
  const names = ["a", "b", "c", "d"];
  const satallites = names.map((n) => <li>Satélite {n}</li>);

  let title;

  if (props.title_with_underline) {
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  } else {
    title = <h4>{props.name}</h4>;
  }

  return (
    <div onClick={() => props.clickOnPlanet(props.name)}>
      {title}
      <DescriptonWithLink
        description={props.description}
        link={props.link}
        link_description={props.link_description}
      />
      <GrayImg img_url={props.img_url} gray={props.gray} />

      <h4>Satélites</h4>
      <ul>{satallites}</ul>
      <hr />
    </div>
  );
};

export default Planet;
