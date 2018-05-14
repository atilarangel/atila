import React, { Component } from 'react';
import Header from "../../components/header/header";


class Contact extends Component {
  render() {
    return (
      <div className="container">
        <Header typeclass="header" />
          <div style={{textAlign: 'center',
            position: 'relative',
            margiTop: '20%',
            transform: 'translateY(50%)'
            }}>
            <p>superatilarangel@gmail.com</p>
            <p><a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/BuzzLightila'>facebook @buzzlightila</a></p>
            <p><a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/buzzlightila/'>instagram @buzzlightila</a></p>
            <p><a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/buzzlightila/'>linkedin @buzzlightila</a></p>
          </div>
        </div>
    )
  }
}

export default Contact;