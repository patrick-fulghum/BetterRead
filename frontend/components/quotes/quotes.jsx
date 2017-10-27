import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class QuotePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuotes();
  }

  render() {
    if (this.props.quotes[1]) {
      return (
        <div id="quote">
          <h2>
            Quotes
          </h2>
          <div>
            <div id="quote-text">
              <div className="portrait">

              </div>
              <div className="quote-content">
                <div>
                  { this.props.quotes[1].content }
                </div>
                <div>
                  { this.props.quotes[1].author }
                </div>
              </div>
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
