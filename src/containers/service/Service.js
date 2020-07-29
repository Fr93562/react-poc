import React from 'react';
import './service.css';

/**
 * rendu de la page des services
 * @path : "/services"
 */
class Service extends React.Component {

	render() {

		return (
			<section id="services">

				<h2> NOS SERVICES </h2>

				<div id="logo">
					<div id="logocercle">
						<div id="logocercle4"> </div>
					</div>
				</div>

				<p id="pservice"> La WebAgency, une entreprise qui est reconnue pour son expertise vous propose de nombreuses prestations. <br />
				Les solutions que nous vous proposons sont entièrement personnalisables et adaptables à chacun de vos projets. </p>
				<article>

					<div id="ordinateur2">
						<img src="images/main-feature.png" alt="logo web agency" />
					</div>

					<div >
						<div id="centrerp">
							<div>
								<div id="test">
									<i id="graph" class="fa fa-line-chart fa-2x" aria-hidden="true" ></i>
									<i id="minicercle" class="fa fa-circle" aria-hidden="true"></i>
								</div>
								<h3> UX Design </h3>
								<p>L'expérience utilisateur est un point essentiel à la WebAgency. Nous avons un objectif clair:
									rendre votre site <em class="referencement">accessible</em>, facile à prendre en main et surtout efficient. </p>
							</div>
							<div >
								<div id="test2">
									<i id="cube" class="fa fa-cubes fa-2x" aria-hidden="true"></i>
									<i id="minicercle2" class="fa fa-circle" aria-hidden="true"></i>
								</div>
								<h3> UI Design </h3>
								<p> <em class="referencement">Le design de l'interface </em>est un élément important de votre futur projet. Par exemple, le design des boutons
										de navigation, les animations placées influent sur la navigation de l'utilisateur. </p>
							</div>
							<div>
								<div id="test3">
									<i id="graph2" class="fa fa-pie-chart fa-2x" aria-hidden="true"></i>
									<i id="minicercle3" class="fa fa-circle" aria-hidden="true"></i>
								</div>
								<h3> SEO </h3>
								<p> Le <em class="referencement"> référencement naturel </em> est indispensable pour donner une visibilité à votre site.
									Un site web de qualité favorise un excellent placement dans les moteurs de recherches. </p>
							</div>
						</div>
					</div>
				</article>
			</section>
		);
	}
}

export default Service;