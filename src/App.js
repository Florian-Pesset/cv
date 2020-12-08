import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Contact from './components/Contact';
import FormationsList from './components/FormationsList';
import Portfolio from './components/Portfolio';
import ExperiencesList from './components/ExperiencesList';
import html from './img/html.png'
import js from './img/js.png'
import react from './img/react.png'
import node from './img/node.png'
import sql from './img/sql.png'
import git from './img/git.png'
import github from './img/github2.png'


function App() {
  return (
    <div className="App">
     <Router>
      <input type="checkbox" id="menu-checkbox" />
        <nav  role="navigation">
          <div id="menuToggle">
            <input type="checkbox" className="none" />
            <span className="none"></span>
            <span className="none"></span>
            <span className="none"></span>
              <ul id="menu">
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/formations">Formations</Link>
                </li>
                <li>
                  <Link to="/experiences">Expériences</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
              </ul>
          </div>
          <div className="competences">
          <img src={html} alt="html" className="logos" />
          <img src={js} alt="js" className="logos" />
          <img src={react} alt="react" className="logos" />
          <img src={node} alt="node" className="logos" />
          <img src={sql} alt="sql" className="logos" />
          <img src={git} alt="git" className="logos" />
          <img src={github} alt="github" className="logos" />
          </div>
        </nav>
        
        <Switch>
          <Route exact path="/">
           <Contact />
          </Route>
          <Route exact path="/formations">
           <FormationsList />
          </Route>
          <Route exact path="/experiences">
            <ExperiencesList />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
