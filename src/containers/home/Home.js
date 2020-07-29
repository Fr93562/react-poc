import React from '../../../node_modules/react';
import './home.css';

/**
 * Rendu de la page d'accueil
 * @path : "/"
 */
class Home extends React.Component {

  render() {

    return (
      <section id="acceuil">

        <div id="demicercle"> x </div>
        <div id="demicercle2"> x </div>

        <div id="banniere">

          <h1> <strong> WEBAGENCY </strong>: L'AGENCE DE TOUS <br /> VOS PROJETS !</h1>
          <p> Vous avez un projet web ? La WebAgency vous aide à le réaliser ! </p>
          {/* <!-- Bouton CSS "plus d'infos" --> */}
          <a id="bouton" href="#"> Plus d'infos </a>
        </div>

        <div id="filet">
          <div id="filetbleu"> </div>
        </div>
        
      </section>
    );
  }
}

export default Home;