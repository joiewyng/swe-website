import React, { Component } from 'react';

//components
//import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import InfoSession from './components/pages/info_session'

//includes
import './default.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Homepage />
        <Footer />
        <InfoSession />
      </div>
    );
  }
}

export default App;
