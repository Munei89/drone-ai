import React, { Component } from 'react';
import './scss/styles.scss'
import './App.scss'
import Logo from './img/drone-logo.svg'
import {UserSearch} from './components/UserSearch';


class App extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-black navbar-color-on-scroll" color-on-scroll="200" role="navigation">
        <img src={Logo} className="img-responsive" />
    </nav>
    <div className="container">
      <div classname="row">
        <div className="col-md-8 col-sm-12 col-xs-12">

        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
          
        </div>
      </div>
    </div>
    <div className="container">
    <div className="row">
        <UserSearch />
      </div>
    </div>
      </div>
    );
  }
}

export default App;
