import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/skeleton/header/Header';
import Footer from './components/skeleton/footer/Footer';

import Home from './containers/home/Home';
import Contact from './containers/contact/Contact';
import Project from './containers/project/Project';
import Service from './containers/service/Service';

/**
 * fonction de rendu principale de l'application
 * affiche les éléments fronts fixes et dynamiques
 */
function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <div id="router">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/services" component={Service}></Route>
            <Route exact path="/projets" component={Project}></Route>
            <Route exact path="/contact" component={Contact}></Route>
          </Switch>
        </div>

      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
