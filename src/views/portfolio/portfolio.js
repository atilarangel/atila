import React, { Component } from 'react';
import Header from "../../components/header/header";
import Box from "./box";

class Portfolio extends Component {
  constructor(props){
      super(props);
      let Image = "../../assets/portfolio";
      this.state = {
        dados: [
          {title: 'Code', img: Image+'github.gif'},
          {title: 'Blue', year:'2016', img: Image+'blue.gif'},
          {title: 'Área 24', year:'2016', img: Image+'area24.gif'},
          {title: 'Pupper', year:'2016', img: Image+'pupper.gif'},
          {title: 'Ergástulo', year:'2015', img: Image+'ergastulo.gif'},
          {title: 'CowRun', year:'2014', img: Image+'cowrun.gif'}
        ]};
  }
  
  render() {
    const port = this.state.dados;
    let showPort = port.map(function(item, index) {
      return <div key = {index}><Box item = {item}/></div>;
    });
    return (
      <div className="container">
        <Header typeclass="header" />
            
        {showPort}
          
      </div>
    )
  }
}

export default Portfolio;