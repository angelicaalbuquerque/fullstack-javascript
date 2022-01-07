import React from "react";
import DescriptonWithLink from "../../shared/DescriptionWithLink";
import GrayImg from "../../shared/gray_img";

class Planet extends React.Component {
  render() {
    let title;

    if (this.props.title_with_underline) {
      title = (
        <h4>
          <u>{this.props.name}</u>
        </h4>
      );
    } else {
      title = <h4>{this.props.name}</h4>;
    }

    return (
      <div onClick={() => this.props.clickOnPlanet(this.props.name)}>
        {title}
        <DescriptonWithLink
          description={this.props.description}
          link={this.props.link}
          link_description={this.props.link_description}
        />
        <GrayImg img_url={this.props.img_url} gray={this.props.gray} />
        <hr />
      </div>
    );
  }
}

export default Planet;
