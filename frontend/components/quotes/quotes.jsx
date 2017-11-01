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
    let sample = Object.keys(this.props.quotes).length;
    let randomNum = Math.floor(Math.random() * sample);
    let quote = this.props.quotes[Object.keys(this.props.quotes)[randomNum]];
    return (
      <div id="quote-text">
        <div className="portrait">
          <img src={ quote.portrait } />
        </div>
        <div className="quote-content">
          <div className="particular-quote">
            { `"${quote.content}"` }
          </div>
          <br />
          <div>
            - { quote.author }
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (Object.keys(this.props.quotes).length > 0) {
      return (
        <div id="quote">
          <div>
            <h2>
              Quotes
            </h2>
            <br />
            <div>
              <div >
                { this.rotatingQuotes() }
              </div>
            </div>
          </div>
        <div>

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
      );
    }
    else {
      return (<div></div>);
    }
  }
}

export default QuotePage;
