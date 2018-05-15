import React, { Component } from 'react';
import Header from "../../components/header/header";
import Box from "./box";

class Portfolio extends Component {
  constructor(props){
      super(props);
      this.state = {
        dados: [
          {title: 'Code', img: 'github.gif', link:'https://github.com/atilarangel'},
          {title: 'Blue', year:'2016', img: 'blue.gif', link:'https://www.youtube.com/watch?v=aSbW9sKgPKk&t='},
          {title: 'Área 24', year:'2016', img: 'area24.gif', link:'https://www.youtube.com/watch?v=Zs89EfgHTgE'},
          {title: 'Pupper', year:'2016', img: 'pupper.gif', link:'http://pupper.esy.es/index.html'},
          {title: 'Ergástulo', year:'2015', img: 'ergastulo.gif', link:'https://www.youtube.com/watch?v=7AIH2LjKE0A'},
          {title: 'CowRun', year:'2014', img: 'cowrun.gif', link:''}
        ]};
  }
  
  render() {
    const port = this.state.dados;
    let showPort = port.map(function(item, index) {
      return <Box key = {index} item = {item}/>
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