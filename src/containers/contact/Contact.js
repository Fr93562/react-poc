import React from 'react';
import './contact.css';


import FormContact from '../../components/content/FormContact';
import DateContact from '../../components/content/DateContact';
/**
 * rendu de la page de contact
 * @path : "/contact"
 */
class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      button: false,
      timer : {
        hour : 0,
        minut : 0,
      }
    };

    this.trueButton = this.trueButton.bind(this);
    this.falseButton = this.falseButton.bind(this);
    this.currentTime = this.currentTime.bind(this);
  }

  trueButton() {

    this.setState({
      button: true
    });
  };

  falseButton() {

    this.setState({
      button: false
    });
  };

  currentTime() {

    let date = new Date();
    let response = {
      hour : date.getHours(),
      minut : date.getMinutes()
    };

    this.setState({

      timer: {
        hour : response.hour,
        minut : response.minut
      }
    });
  }

  render() {

    setInterval( this.currentTime, 1000);

    return (
      <section id="contact">

        <h2> CONTACT </h2>
        <div id="navContact">       
          <button onClick={this.falseButton}> Formulaire </button> <span>|</span>
          <button onClick={this.trueButton}> Horaires </button>
        </div>

        <div id="map">

          {this.state.button? <DateContact date={this.state.timer} ></DateContact>: <FormContact></FormContact> }

        </div>
        
      </section>
    );
  }
}

export default Contact;