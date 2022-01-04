import React from "react";
import GrayImg from "../../shared/gray_img";

const Planet = () => {
  return (
    <div>
      <h4>Mercúrio</h4>
      <p>
        Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o
        Sol a cada 87,969 dias terrestres. A sua órbita tem a maior
        excentricidade e o seu eixo apresenta a menor inclinação em relação ao
        plano da órbita dentre todos os planetas do Sistema Solar.
      </p>
      <GrayImg img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg" />
      <GrayImg img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Internal_Structure_of_Mercury_%28pt%29.jpg/220px-Internal_Structure_of_Mercury_%28pt%29.jpg" />
    </div>
  );
};

export default Planet;
