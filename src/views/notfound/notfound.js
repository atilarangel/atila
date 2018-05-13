import React, { Component } from 'react';
import Header from "../../components/header/header";



class NotFound extends Component {

  render() {
    return (
      <div className="container">
        <Header typeclass="header" />
          <h2 className="page-title">NotFound</h2>
        </div>
    )
  }
}

export default NotFound;