import React from 'react';
import { Link } from "react-router-dom";
import './menu.css'

export default ({ close }) => (
    <div className="menu" onClick={close}>
      <ul>
        <li>
          <Link to="/" className="button">
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className="button">
            Portfólio
          </Link>
        </li>
        <li>
          <Link to="/contact" className="button">
            Contato
          </Link>
        </li>
      </ul>
    </div>
)