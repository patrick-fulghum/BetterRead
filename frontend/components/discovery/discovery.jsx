import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class DiscoveryPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div id="discovery">
        <h2>
          What will <i>you</i> discover?
        </h2>
        <div className="discovery-main">
          <div className="discovery-p-tags">
            <p>Because Guest liked...</p>
            <p>They Discovered:</p>
          </div>
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
            <li className="hp-image">
            </li>
            <li className="hp-image">
            </li>
            <li className="hp-image">
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DiscoveryPage;
