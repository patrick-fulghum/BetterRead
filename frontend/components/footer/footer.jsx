import React from 'react';
import { Link } from 'react-router-dom';

class FooterPage extends React.Component {
  render() {
    return (
      <div id="footer-container">
        <div>
          <i className="fa fa-users"></i>
        </div>
        <div>
          <a href="http://www.patrick-fulghum.club/">About Me</a>
        </div>
        <div>
          <a href="https://github.com/patrick-fulghum">Github</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/patrick-fulghum-393990104/">
            linkedin</a>
        </div>
      </div>
    );
  }
}
export default FooterPage;
