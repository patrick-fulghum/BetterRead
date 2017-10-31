import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SponsorBookPage extends React.Component {

  render() {
    return (
      <div id="sponsor-main">
        <h2 className="title">
          SPONSORED BOOKS
        </h2>
        <br />
        <div className="sponsored-book-container">
          <div className="hp-image">

          </div>
          <div>
            <ul id="sponsor-info">
              <li>
                <Link to='/construction'>Classic Tales of Cosmic Horror</Link>
              </li>
              <li>
                This book is riveting, intriguing and horrifying.
              </li>
              <li>
                <Link to='/'>better-read.herokuapp.com</Link>
              </li>
              <li>
                <Link to='/'>View all Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sponsored-book-container">

        </div>
      </div>
    );
  }
}

export default SponsorBookPage;
