import React, { Fragment, useState } from "react";
import Planet from "./planet";

//método para chamar endpoint + transformação em json
async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

//chamada do método assíncrono e para, quando terminar, processar pegando o data e dando um setState()
// componentDidMount() {
//   getPlanets().then((data) => {
//     setState((state) => ({
//       planets: data["planets"],
//     }));
//   });
// }

const Planets = () => {
  //planets: onde vai ficar; setPlanets: método para alterar aquele estado do useState
  const [planets, setPlanets] = useState([
    {
      id: "mars",
      name: "Mars",
      description:
        "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet'.",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg",
      link: "https://en.wikipedia.org/wiki/Mars",
    },
  ]);

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
