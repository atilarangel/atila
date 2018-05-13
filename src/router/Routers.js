import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import About from '../views/about/about';
import Portfolio from '../views/portfolio/portfolio';
import Contact from '../views/contact/contact';
import NotFound from '../views/notfound/notfound';

class Routes extends Component {

    render() {
    
      return (
        <HashRouter>
            <Switch> 
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
        </HashRouter>
      );
    }
  }

export default Routes;
  