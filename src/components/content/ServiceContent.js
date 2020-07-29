import React from '../../../node_modules/react';

/**
 * rendu du header de la page html
 * utilise l'objet Link pour le router react
 */
class ServiceContent extends React.Component {

    response = ``;
    data = [
        {
            id: "test",
            h3: "UX Design",
            content: `L'expérience utilisateur est un point essentiel à la WebAgency. Nous avons un objectif clair:
            rendre votre site accessible, facile à prendre en main et surtout efficient.`
        },
        {
            id: "test2",
            h3: "UI Design",
            content: `Le design de l'interface est un élément important de votre futur projet. Par exemple, le design des boutons
            de navigation, les animations placées influent sur la navigation de l'utilisateur. `
        },
        {
            id: "test3",
            h3: "SEO",
            content: `Le référencement naturel est indispensable pour donner une visibilité à votre site.
            Un site web de qualité favorise un excellent placement dans les moteurs de recherches. `
        },
    ];

    em(importantContent) {

        return <em class="referencement"> {importantContent} </em>;
    }

    render() {

        this.response = this.data.map((data) =>

            <div>
                <div id={data.id}>
                    <i id="graph" class="fa fa-line-chart fa-2x" aria-hidden="true" ></i>
                    <i id="minicercle" class="fa fa-circle" aria-hidden="true"></i>
                </div>
                <h3> {data.h3} </h3>
                <p> {data.content} </p>
            </div>
        );


        return (

            this.response
        );
    }
}

export default ServiceContent;