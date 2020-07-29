import React from '../../../../node_modules/react';
import { Link } from "react-router-dom";

import './header.css';

/**
 * rendu du header de la page html
 * utilise l'objet Link pour le router react
 */
class Header extends React.Component {

  render() {
    
    return (
      <header>

        <div>
          <img id="agence" src="./images/logo.png" alt="logo web agency" />
        </div>

        <nav>
          <ul className="list-inline">
            <li className="list-inline-item"><Link to="/"> Accueil </Link></li>
            <li className="list-inline-item"><Link to="/services"> Services </Link></li>
            <li className="list-inline-item"><Link to="/projets"> Projets </Link></li>
            <li className="list-inline-item"><Link to="/contact"> Contact </Link></li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;