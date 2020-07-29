import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from './components/skeleton/header/Header';
import Footer from './components/skeleton/footer/Footer';

import Home from './containers/home/Home';
import Map from './containers/map/Map';
import Faq from './containers/faq/Faq';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <div id="router">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/carte" component={Map}></Route>
            <Route exact path="/faq" component={Faq}></Route>
          </Switch>
        </div>

      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
