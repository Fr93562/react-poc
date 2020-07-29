import React from 'react';
import './service.css';

import ServiceContent from '../../components/content/ServiceContent';

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
							<ServiceContent></ServiceContent>
						</div>
					</div>
				</article>
			</section>
		);
	}
}

export default Service;