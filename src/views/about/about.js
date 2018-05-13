import React, { Component } from 'react';
import Header from "../../components/header/header";


class About extends Component {
  render() {
    return (
      <div className="container">
        <Header typeclass="header" />
          <p>
          Nasci no Rio de Janeiro, no dia 8 de setembro de 1998. Sou apaixonado por design, tecnologia e uma boa arte. Essas paixões hoje em dia fazem parte não só dos meus hobbies como também da profissão que escolhi para desenvolver minhas habilidades. Designer, ilustrador, animador, programador e futuro desenvolvedor... Busco na minha carreira integrar tecnologia e o bom design. Sou uma pessoa muito curiosa e busco sempre aprender mais sobre diversos assuntos.
          </p>
        </div>
    )
  }
}

export default About;