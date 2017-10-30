import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SponsorShelfPage extends React.Component {
  render() {
    return (
      <div>
        <h2 className="title">Love Lists?</h2>
        <ul>
          <li>
            <Link to='/construction'>Best for Book Clubs</Link>
          </li>
          <li>
            <Link to='/construction'>Best Crime & Mystery Books</Link>
          </li>
          <li>
            <Link to='/construction'>Best Books of the 20th Century</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SponsorShelfPage;
