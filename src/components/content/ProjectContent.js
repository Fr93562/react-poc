import React from '../../../node_modules/react';

/**
 * rendu du header de la page html
 * utilise l'objet Link pour le router react
 */
class ProjectContent extends React.Component {

    response = ``;
    data = [
        {
            id: "portfolio1",
            h4: "Blog d'écrivain",
            content: `Publier des nouvelles`
        },
        {
            id: "portfolio2",
            h4: "Site d'e-commerce",
            content: `Vente d'articles `
        },
        {
            id: "portfolio3",
            h4: "Site vitrine",
            content: `Présenter votre activité  `
        },
        {
            id: "portfolio4",
            h4: "Une appli web ",
            content: `Proposez un service `
        },
        {
            id: "portfolio5",
            h4: "Un forum",
            content: `Echangez vos idées`
        },
        {
            id: "portfolio6",
            h4: "Un portfolio",
            content: `Présentez votre travail`
        },
        {
            id: "portfolio7",
            h4: "Une appli mobile",
            content: `Proposez d'autres services`
        },
        {
            id: "portfolio8",
            h4: "Et bien plus encore",
            content: `Tout est possible`
        },
    ];

    render() {

        this.response = this.data.map((data) =>

            <div class="portfolio" id={data.id}>
                <div class="porthover">
                    <div class="portcercle"><i class="fa fa-eye" aria-hidden="true"></i></div>
                    <h4> {data.h4} </h4>
                    <p> {data.content} </p>
                </div>
            </div>
        );

        let firstArticle = [];
        let secondArticle = [];

        for (let index = 0; index < this.response.length; index++) {

            if(index < 4) {
                firstArticle.push(this.response[index]);
            } else {
                secondArticle.push(this.response[index]);
            }
        }

        console.log(this.response);

        return ( 
        <div>
            <article id="portfolioplacementmedia" class="portfolioplacement">
                {firstArticle}
            </article>
            <article class="portfolioplacement">
                {secondArticle}
            </article>

        </div>

        );
    }
}

export default ProjectContent;