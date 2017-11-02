import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SponsorBookPage extends React.Component {

  limitReviewLength(reviews) {
    if (reviews[0]) {
      if (reviews[0].body.length > 80) {
        return (
          <li>
            {reviews[0].body.slice(0, 80)}...
          </li>
        );
      } else {
        return (
          <li>
            {reviews[0].body}
          </li>
        );
      }
    }
  }

  generateBook(num) {
    return(
      <div className="sponsored-book-container">
        <div>
          <Link to={`/books/${num}`}>
            <img className="discovery-image" src={this.props.books[num].cover} />
          </Link>
        </div>
        <div>
          <ul id="sponsor-info">
            <li>
              <Link to={`/books/${num}`} className='book-title'>
                {this.props.books[num].title}
              </Link>
            </li>
            <br />
            { this.limitReviewLength(this.props.books[num].reviews) }
            <br />
            <li>
              <Link to={`/books/${num}`}>View all Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  ensureDiff() {
    let sample = Object.keys(this.props.books).length;
    let num1 = Math.floor(Math.random()*(sample));
    let num2 = Math.floor(Math.random()*(sample));
    while (num2 === num1) {
      num2 = Math.floor(Math.random()*(sample));
    }
    return (
      <div>
        {this.generateBook(Object.keys(this.props.books)[num1])}
        <br />
        {this.generateBook(Object.keys(this.props.books)[num2])}
      </div>
    );
  }

  render() {
    if (Object.keys(this.props.books).length > 1) {
      return (
        <div id="sponsor-main">
          <h2 className="sub-title">
            SPONSORED BOOKS
          </h2>
          <br />
          { this.ensureDiff() }
          <div className="sponsored-book-container">

          </div>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default SponsorBookPage;
