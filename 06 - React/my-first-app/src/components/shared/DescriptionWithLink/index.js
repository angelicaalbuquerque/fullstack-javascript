import React, { Fragment } from "react";

const DescriptonWithLink = (props) => {
  if (props.link) {
    return (
      <Fragment>
        <p>{props.description}</p>
        <p>
          <a href={props.link}>{props.link_description}</a>
        </p>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <p>
          <em>{props.description}</em>
        </p>
      </Fragment>
    );
  }
};

export default DescriptonWithLink;
