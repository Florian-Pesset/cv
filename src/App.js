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
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import ExperiencesList from './components/ExperiencesList';


function App() {
  return (
    <Router>
      <div className="App">
      <input type="checkbox" id="menu-checkbox" />
        <nav  role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
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
                  <Link to="/skills">Compétences</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
              </ul>
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
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
