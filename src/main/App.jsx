import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import Logo from "../components/template/logo";

import Nav from "../components/template/nav";
import Main from "../components/template/main";
import Footer from "../components/template/footer";

export default props => (
  <div className="app">
    <Logo></Logo>
    <Nav />
    <Main icon="home" title="Início" subtitle="Aplicação React" />
    <Footer />
  </div>
);
