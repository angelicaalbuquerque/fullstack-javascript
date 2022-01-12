import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <div>
      <h2>Página não encontrada</h2>
      <Link to="/">Voltar à listagem</Link>
    </div>
  );
};

export default NotFoundScreen;
