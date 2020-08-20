import * as React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import App from '../components/Main/App';
import AboutMe from "../components/AboutMe/AboutMe";
import Project from "../components/Project/Project";
import Introduce from "../components/AboutMe/Introduce/Introduce";
import TechStack from "../components/AboutMe/TechStack/TechStack";
import Vision from "../components/AboutMe/Vision/Vision";
import Contact from "../components/AboutMe/Contact/Contact";
import {
  NavBar,
  ANav,
  MANav
} from "./styled";
import Weather from '../components/AboutMe/TechStack/Weather/Weather';

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
          <Route exact path={"/"} component={App} />
          <Route exact path={"/AboutMe"} component={AboutMe} />
          <Route exact path={"/AboutMe/Introduce"} component={Introduce} />
          <Route exact path={"/AboutMe/TechStack"} component={TechStack} />
          <Route exact path={"/AboutMe/Vision"} component={Vision} />
          <Route exact path={"/AboutMe/Contact"} component={Contact} />
          <Route exact path={"/Project"} component={Project} />
          <Route exact path={"/Project/Weather"} component={Weather} />
        </main>
        {/* <NavBar>
          <div>ㅁasd</div>
        </NavBar> */}
      </Route>
    </BrowserRouter>
  );
};

export default Root;
