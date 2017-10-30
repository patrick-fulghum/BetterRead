import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SponsorBookPage extends React.Component {

  render() {
    return (
      <div>
        <h2>
          SPONSORED BOOKS
        </h2>
        <div className="sponsored-book-container">
          <div className="hp-image">

          </div>
          <div>
            <ul>
              <li>
                <Link to='/construction'>Classic Tales of Cosmic Horror</Link>
              </li>
              <li>
                // TODO: Book Description
                Collection of over 60 short stories by H.P. Lovecraft
              </li>
              <li>
                <Link to='/'>better-read.herokuapp.com</Link>
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
