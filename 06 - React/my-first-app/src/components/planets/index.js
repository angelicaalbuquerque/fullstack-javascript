import React, { Fragment } from "react";
import Planet from "./planet";

const clickOnPlanet = (name) => {
  console.log(`Um click no planeta ${name}`);
};

class Planets extends React.Component {
  render() {
    return (
      <Fragment>
        <h3>Lista de Planetas</h3>
        <hr />
        <Planet
          name="Mercúrio"
          description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o
        Sol a cada 87,969 dias terrestres. A sua órbita tem a maior
        excentricidade e o seu eixo apresenta a menor inclinação em relação ao
        plano da órbita dentre todos os planetas do Sistema Solar."
          link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
          link_description="Saiba mais"
          img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
          clickOnPlanet={clickOnPlanet}
          title_with_underline={true}
          gray={true}
        />
        <Planet
          name="Plutão"
          description="Plutão, formalmente designado 134340 Plutão, é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol. "
          // link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
          link_description="Saiba mais"
          img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
          clickOnPlanet={clickOnPlanet}
        />
      </Fragment>
    );
  }
}

export default Planets;
