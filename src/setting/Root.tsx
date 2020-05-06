import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import App from '../components/Main/App';
import AboutMe from "../components/AboutMe/AboutMe";
import Project from "../components/Project/Project";
import Introduce from "../components/AboutMe/Introduce/Introduce";
import {
  NavBar,
  ANav,
  MANav
} from "./styled";

function Root () {
  return (
    <Router>
      <NavBar>
        <ANav href="/">Home</ANav>
        <MANav href="/AboutMe">AboutMe</MANav>
        <ANav href="/Project">Project</ANav>
      </NavBar>
      <main>
        <Route exact path={"https://chosungwon.github.io/PortfolioSite"} component={App} />
        <Route exact path={"https://chosungwon.github.io/PortfolioSite/AboutMe"} component={AboutMe} />
        <Route exact path={"https://chosungwon.github.io/PortfolioSite/AboutMe/Introduce"} component={Introduce} />
        <Route exact path={"https://chosungwon.github.io/PortfolioSite/Project"} component={Project} />
      </main>
    </Router>
  );
};

export default Root;
