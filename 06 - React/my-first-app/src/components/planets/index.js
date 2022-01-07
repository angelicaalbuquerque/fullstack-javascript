import React, { Fragment } from "react";
import Planet from "./planet";

class Planets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
    };
  }

  removeLast = () => {
    let new_planets = [...this.state.planets];
    new_planets.pop();
    this.setState((state) => ({
      planets: new_planets,
    }));
  };

  duplicateLastPlanet = () => {
    let last_planet = this.state.planets[this.state.planets.length - 1];
    this.setState((state) => ({
      planets: [...this.state.planets, last_planet],
    }));
  };

  render() {
    return (
      <Fragment>
        <h3>Lista de Planetas</h3>
        <button onClick={this.removeLast}>Remover último</button>
        <button onClick={this.duplicateLastPlanet}>Duplicar último</button>
        <hr />
        {this.state.planets.map((planet) => (
          <Planet
            name={planet.name}
            description={planet.description}
            link={planet.link}
            link_description={planet.link_description}
            img_url={planet.img_url}
          />
        ))}
      </Fragment>
    );
  }
}

export default Planets;
