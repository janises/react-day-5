import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';
import Header from "./Header/Header";
import {Switch, Route} from "react-router-dom";
// import Arena from "./Arena/Arena";
import Wordnik from "./Wordnik/Wordnik";


class App extends Component {
  constructor() {
    super();

    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* <Route component={Arena} path="/"/> */}
          <Route component={Wordnik} path="/wordnik"/>
        </Switch>
      </div>
    );
  }
}

export default App;
