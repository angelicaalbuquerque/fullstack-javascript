import React, { Fragment, useState, useEffect } from "react";

const Form = (props) => {
  const [fields, setFields] = useState({
    name: "",
    description: "",
    link: "",
    img_url: "",
    link_description: "",
  });

  const [name, setName] = useState("");
  const handleFieldsChange = (event) =>
    setFields({
      ...fields,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  const handleSubmit = (event) => {
    props.addPlanet(fields);
    event.preventDefault();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            id="description"
            type="text"
            name="description"
            value={fields.description}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="description">Link: </label>
          <input
            id="link"
            type="text"
            name="link"
            value={fields.link}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="description">img_url: </label>
          <input
            id="img_url"
            type="text"
            name="img_url"
            value={fields.img_url}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="link_description">link_description: </label>
          <input
            id="link_description"
            type="text"
            name="link_description"
            value={fields.link_description}
            onChange={handleFieldsChange}
          />
        </div>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  );
};

export default Form;
