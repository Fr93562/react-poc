import React from '../../../node_modules/react';

/**
 * rendu des heures d'ouverture
 * utilise l'objet Link pour le router react
 */
class DateContact extends React.Component {

  constructor(props) {
    super(props);
  }

    message = "";

    setState() {

      let open = true;

        if(open) {

          this.message = <p> L'agence est actuellement ouverte.</p>
        } else {

            this.message = <p>L'agence est actuellement fermée.</p>
        }
    }

    render() {

      function timeBeforeClose(time) {

        let response = {
          hour: 0,
          minut : 0
        };

        let timeClose = {
          hour: 18,
          minut : 0
        };

        response.hour = timeClose.hour - time.hour;

        if(response.hour < 0) {

          response.hour = response.hour + 24;
        }
        response.minut = timeClose.minut - time.minut;

        if(response.minut < 0) {

          response.minut = response.minut + 60;
        }
        return response;
      }

      let response = timeBeforeClose(this.props.date);

      this.setState();

        return ( 
            <div id="formulaire">

            <h3> Heures d'ouvertures 10h/18h </h3>
        <p>L'agence ferme dans {response.hour}h{response.minut}.</p>
          </div>

        );
    }
}

export default DateContact;