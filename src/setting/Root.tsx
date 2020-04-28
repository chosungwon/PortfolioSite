import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import App from '../components/Main/App';
import AboutMe from "../components/AboutMe/AboutMe";
import Project from "../components/Project/Project";

function Root () {
  return (
    <Router>
      <main>
        <Route exact path={"/"} component={App} />
        <Route exact path={"/AboutMe"} component={AboutMe} />
        <Route exact path={"/Project"} component={Project} />
      </main>
    </Router>
  );
};

export default Root;
