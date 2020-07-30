import React from '../../../node_modules/react';

/**
 * rendu du header de la page html
 * utilise l'objet Link pour le router react
 */
class FormContact extends React.Component {

    render() {

        return ( 
            <div id="formulaire">

            <h3> Contact info</h3>
            <p>
              <em> WebAgency SAS </em> <br />
						25 rue d'Hauteville 75010 Paris <br />
						Tel: 01 02 03 04 05
						</p>

            <form method="post" action="traitement.php">
              <input class="form" type="text" name="pseudo" id="nom" placeholder="Name" size="38" />
              <br />
              <input class="form" type="email" name="mail" id="mail" placeholder="Email" size="38" />
              <br />
              <input class="form" type="text" name="subject" id="subject" placeholder="Subject" size="38" />
              <br />
              <textarea class="form" name="message" id="message" placeholder="Message" rows="6" cols="39" ></textarea>
              <br />
              <input class="form" id="submite" type="submit" value="Send Message" />
            </form>

          </div>

        );
    }
}

export default FormContact;