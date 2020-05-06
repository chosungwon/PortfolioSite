import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
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
    <BrowserRouter basename="/PortfolioSite">
      <Route>
        <NavBar>
          <ANav href="/PortfolioSite">Home</ANav>
          <MANav href="/PortfolioSite/AboutMe">AboutMe</MANav>
          <ANav href="/PortfolioSite/Project">Project</ANav>
        </NavBar>
        <main>
          <Route exact path={"PortfolioSite/"} component={App} />
          <Route exact path={"PortfolioSite/AboutMe"} component={AboutMe} />
          <Route exact path={"PortfolioSite/AboutMe/Introduce"} component={Introduce} />
          <Route exact path={"PortfolioSite/Project"} component={Project} />
        </main>
      </Route>
    </BrowserRouter>
  );
};

export default Root;
