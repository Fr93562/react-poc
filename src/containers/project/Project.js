import React from 'react';
import './project.css';

import ProjectContent from '../../components/content/ProjectContent';

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
          <ProjectContent></ProjectContent>
        </article>

      </section>
    );
  }
}

export default Project;