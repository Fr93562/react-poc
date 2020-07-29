import React from '../../../../node_modules/react';
import { Link } from "react-router-dom";

import './header.css';

class Header extends React.Component {
  render() {
    return (

      <header>
        <h1>My meteo App</h1>

        <nav>
          <ul className="list-inline">
            <li className="list-inline-item"><Link to="/"> Accueil </Link></li>
            <li className="list-inline-item"><Link to="/carte"> Carte </Link></li>
            <li className="list-inline-item"><Link to="/faq"> FAQ </Link></li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;