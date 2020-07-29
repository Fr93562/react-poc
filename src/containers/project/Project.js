import React from 'react';
import './project.css';

/**
 * rendu de la page des projets
 * @path : "/projets"
 */
class Project extends React.Component {

  render() {

    return (
      <section id="projets">

        <h2 > NOS PROJETS </h2>

        <div id="logo2">
          <div id="logocercle2">
            <div id="logocercle3">
            </div>
          </div>
        </div>

        <p> Acteur incontournable du Web, la WebAgency a répondu à l'attente de nombreux clients. La satisfaction du client est une priorité. <br />
          Cette valeur est une notion fondamentale de notre agence. </p>
        
        <ul>
          <li> <span class="fleche"></span><a href="#"> All works</a></li>
          <li> <span class="fleche"></span> <a href="#"> Creative </a></li>
          <li> <span class="fleche"></span> <a href="#"> Corporate </a></li>
          <li> <span class="fleche"></span> <a href="#"> Portfolio </a></li>
        </ul>
        
        <article class="portfolioplacement">
          
          <div class="portfolio" id="portfolio1">
            <div class="porthover">
              <div class="portcercle"><i class="fa fa-eye" aria-hidden="true"></i></div>
              <h4> Blog d'écrivain </h4>
              <p>Publier des nouvelles </p>
            </div>
          </div>

          <div class="portfolio" id="portfolio2">
            <div class="porthover">
              <div class="portcercle"><i class="fa fa-eye" aria-hidden="true"></i></div>
              <h4> Site d'e-commerce </h4>
              <p>Vente d'articles </p>
            </div>
          </div>

          <div class="portfolio" id="portfolio3">
            <div class="porthover">
              <div class="portcercle"><i class="fa fa-eye" aria-hidden="true"></i></div>
              <h4> Site vitrine </h4>
              <p>Présenter votre activité </p>
            </div>
          </div>

          <div class="portfolio" id="portfolio4">
            <div class="porthover">
              <div class="portcercle"><i class="fa fa-eye" aria-hidden="true"></i></div>
              <h4> Une appli web </h4>
              <p>Proposez un service </p>
            </div>
          </div>

        </article>
        <article id="portfolioplacementmedia" class="portfolioplacement">
          
          <div class="portfolio" id="portfolio5">
            <div class="porthover">
              <div class="portcercle"><i class="fa fa-eye" aria-hidden="true"></i></div>
              <h4> Un forum </h4>
              <p>Echangez vos idées </p>
            </div>
          </div>
         
          <div class="portfolio" id="portfolio6">
            <div class="porthover">
              <div class="portcercle"><i class="fa fa-eye" aria-hidden="true"></i></div>
              <h4> Un portfolio </h4>
              <p>Présentez votre travail </p>
            </div>
          </div>
          
          <div class="portfolio" id="portfolio7">
            <div class="porthover">
              <div class="portcercle"><i class="fa fa-eye" aria-hidden="true"></i></div>
              <h4> Une appli mobile </h4>
              <p>Proposez d'autres services </p>
            </div>
          </div>
          
          <div class="portfolio" id="portfolio8">
            <div class="porthover">
              <div class="portcercle"><i class="fa fa-eye" aria-hidden="true"></i></div>
              <h4> Et bien plus encore </h4>
              <p>Tout est possible </p>
            </div>
          </div>
        
        </article>
      </section>
    );
  }
}

export default Project;