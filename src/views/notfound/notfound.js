import React, { Component } from 'react';
import Header from "../../components/header/header";
import './notfound.css'



class NotFound extends Component {

  render() {
    return (
      <div className="container">
        <Header typeclass="header" />
          <div className="page-title">
            <h1 >404 Error</h1>
            <h3 >Foi mals! Página não encontrada :(</h3>
          </div>
      </div>
    )
  }
}

export default NotFound;