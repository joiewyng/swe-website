import React, {Component} from 'react';
import '../../default.css';

class Header extends React.Component {
  render() {
    return(
      <header className="header">
          <img src={require("./SWE_logo_white.png")} className="logo"/>
          <nav>
              <ul>
                  <li>
                      <a href="#">Home</a>
                  </li>
                  <li>
                      <a href="#">Events</a>
                  </li>
                  <li>
                      <a href="#">Join</a>
                  </li>
              </ul>
          </nav>
          
      </header>
    );
  }
}

export default Header;
