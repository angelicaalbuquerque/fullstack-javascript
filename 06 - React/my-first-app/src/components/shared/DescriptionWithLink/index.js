import React, { Fragment } from "react";

const DescriptonWithLink = (props) => {
  return (
    <Fragment>
      <p>{props.description}</p>
      <p>
        <a href={props.link}>{props.link_description}</a>
      </p>
    </Fragment>
  );
};

export default DescriptonWithLink;
