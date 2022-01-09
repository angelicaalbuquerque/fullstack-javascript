import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";

//método para chamar endpoint + transformação em json
async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

const Planets = () => {
  //planets: onde vai ficar; setPlanets: método para alterar aquele estado do useState
  const [planets, setPlanets] = useState([]);

  //array vazio sendo passado para rodar somente na hora da montagem do componente
  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"]);
    });
  }, []);

  const removeLast = () => {
    let new_planets = [...planets];
    new_planets.pop();
    setPlanets(new_planets);
  };

  const duplicateLastPlanet = () => {
    let last_planet = planets[planets.length - 1];
    setPlanets([...planets, last_planet]);
  };

  return (
    <Fragment>
      <h3>Lista de Planetas</h3>
      <button onClick={removeLast}>Remover último</button>
      <button onClick={duplicateLastPlanet}>Duplicar último</button>
      <hr />
      {planets.map((planet, index) => (
        <Planet
          key={index}
          id={planet.id}
          name={planet.name}
          description={planet.description}
          link={planet.link}
          link_description={planet.link_description}
          img_url={planet.img_url}
        />
      ))}
    </Fragment>
  );
};

export default Planets;
