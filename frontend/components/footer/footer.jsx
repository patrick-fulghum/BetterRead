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
          <Link to='/construction'>About Me</Link>
        </div>
        <div>
          <Link to='/construction'>Github</Link>
        </div>
        <div>
          <Link to='/construction'>Linkin</Link>
        </div>
      </div>
    );
  }
}
export default FooterPage;
