import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class QuotePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuotes();
  }

  rotatingQuotes() {
    let portrait;
    let randomNum = (Math.floor(Math.random() * 3) + 1);
    if (randomNum === 1) {
      portrait = window.oscar;
    } else if (randomNum === 2) {
      portrait = window.cicero;
    } else {
      portrait = window.howie;
    }
    return (
      <div id="quote-text">
        <div className="portrait">
          <img src={ portrait } />
        </div>
        <div className="quote-content">
          <div>
            { `"${this.props.quotes[randomNum].content}"` }
          </div>
          <div>
            { this.props.quotes[randomNum].author }
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.quotes[1]) {
      return (
        <div id="quote">
          <h2>
            Quotes
          </h2>
          <div>
            <div>
              { this.rotatingQuotes() }
            </div>
            <div className="quote-links">
              <Link to="/construction">Best Quotes</Link>
              <Link to="/construction">Love Quotes</Link>
              <Link to="/construction">Inspirational Quotes</Link>
              <Link to="/construction">Funny Quotes</Link>
              <Link to="/construction">Motivational Quotes</Link>
              <Link to="/construction">Life Quotes</Link>
              <Link to="/construction">Friends Quotes</Link>
              <Link to="/construction">Positive Quotes</Link>
              <Link to="/construction">More Quotes</Link>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (<div></div>);
    }
  }
}

export default QuotePage;
