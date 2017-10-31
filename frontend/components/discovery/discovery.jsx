import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class DiscoveryPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    debugger 
    return (
      <div id="discovery">
        <div>
          <div id="suggestions">
            <div className="entry-discovery">
              <h2 className="title">
                Deciding what to read next?
              </h2>
              <br />
              <p>
                You're in the right place. Better_Read is the better
                place to find what your next favorite book will be.
              </p>
            </div>
            <div className="entry-discovery">
              <h2 className="title">
                What are your friends reading?
              </h2>
              <br />
              <p>
                Chances are excellent they
                are discussing their favorite books on Better_Read.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="discovery-main">
          <h2>
            What will <i>you</i> discover?
          </h2>
          <br />
          <div className="discovery-p-tags">
            <p>Because Guest liked...</p>
            <p>They Discovered:</p>
          </div>
          <br />
          <ul className="book-listing">
            <li className="hp-image">
            </li>
            <li className="hp-image">
            </li>
            <li className="hp-image">
            </li>
            <li className="hp-image">
            </li>
            <div className="arrow-box">
              <i className="fa fa-arrow-right"></i>
            </div>
            <li className="hp-image">
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DiscoveryPage;
