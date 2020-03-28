import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import Logo from "../components/template/logo";

import Nav from "../components/template/nav";
import Footer from "../components/template/footer";
import Routes from "./Routes";

import { HashRouter } from "react-router-dom";

export default props => (
  <HashRouter>
    <div className="app">
      <Logo></Logo>
      <Nav />
      <Routes />
      <Footer />
    </div>
  </HashRouter>
);
