import React from "react";

import Main from "../template/main";

export default props => (
  <Main icon="home" title="Início" subtitle="Aplicação React">
    <div className="display-4"> Bem Vindo!</div>
    <hr />
    <p className="mb-0"> Sistema simples para o cadastro de usuários</p>
  </Main>
);
