import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <a href="facebook.com"><img className="icon" src={require("../../images/icons/facebook-icon.JPG")}></img></a>
          <a href="instagram.com"><img className="icon" src={require("../../images/icons/instagram-icon.JPG")}></img></a>
          <a href="twitter.com"><img className="icon" src={require("../../images/icons/twitter-icon.JPG")}></img></a>
        </div>
        <div>
          Cornell Society of Women Engineers
        </div>
      </div>

    );
  }
}

export default Footer;