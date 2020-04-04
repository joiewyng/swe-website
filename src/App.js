import React, { Component } from 'react';

//components
//import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import InformationSession from './components/pages/corporate_info'
import Sponsorship from './components/pages/sponsorship'
import NetworkingDinner from './components/pages/pnd'

//includes
import './default.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        <Footer />
        <InformationSession/>
        <Sponsorship />
        <NetworkingDinner/>
      </div>
    );
  }
}

export default App;
