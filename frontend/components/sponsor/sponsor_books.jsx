import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SponsorBookPage extends React.Component {

  generateBook(num) {
    if (this.props.books[1] && this.props.books[5]) {
      return(
        <div className="sponsored-book-container">
          <div>
            <Link to={`/books/${num}`}>
              <img src={this.props.books[num].cover} />
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
      );
    }
  }

  ensureDiff() {
    let num1 = Math.floor(Math.random()*5 + 1);
    let num2 = Math.floor(Math.random()*5 + 1);
    while (num2 === num1) {
      num2 = Math.floor(Math.random()*5 + 1);
    }
    return (
      <div>
        {this.generateBook(num1)}
        <br />
        {this.generateBook(num2)}
      </div>
    );
  }

  render() {
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
  }
}

export default SponsorBookPage;
