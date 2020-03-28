import React from "react";

import "./main.css";

import Header from "./header";

export default props => (
  <React.Fragment>
    <Header  {...props} />
    <main className="content">Conteúdo</main>
  </React.Fragment>
);
