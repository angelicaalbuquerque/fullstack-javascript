import React, { useState, useEffect } from "react";
import DescriptonWithLink from "../../shared/DescriptionWithLink";
import GrayImg from "../../shared/gray_img";
import Form from "./form";

//método que chama a API
async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

const Planet = (props) => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(props.id).then((data) => {
      setSatellites(data["satellites"]);
    });
  }, []);

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite]);
  };

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
      <hr />
      <Form addSatellite={addSatellite} />
      <hr />

      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>

      <hr />
    </div>
  );
};

export default Planet;
