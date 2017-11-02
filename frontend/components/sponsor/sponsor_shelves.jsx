import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SponsorShelfPage extends React.Component {

  rotatingBooks(listType) {
    let sample = Object.keys(this.props.books).length;
    let randomNums = [];
    while (randomNums.length < 4) {
      let randomNum = Math.floor(Math.random()*sample);
      if (!randomNums.includes(Object.keys(this.props.books)[randomNum])) {
        randomNums.push(Object.keys(this.props.books)[randomNum]);
      }
    }
    return (
      <div>
        <div>
          { listType }
        </div>
        <div>
          <ul className="book-listing">
            <li className="book-promotion">
              <Link to={`/books/${randomNums[0]}`}>
                <img className="shelf-image" src={this.props.books[randomNums[0]].cover}/>
              </Link>
            </li>
            <li className="book-promotion">
              <Link to={`/books/${randomNums[1]}`}>
                <img className="shelf-image" src={this.props.books[randomNums[1]].cover}/>
              </Link>
            </li>
            <li className="book-promotion">
              <Link to={`/books/${randomNums[2]}`}>
                <img className="shelf-image" src={this.props.books[randomNums[2]].cover}/>
              </Link>
            </li>
            <li className="book-promotion">
              <Link to={`/books/${randomNums[3]}`}>
                <img className="shelf-image" src={this.props.books[randomNums[3]].cover}/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  render() {
    if (Object.keys(this.props.books).length > 4) {
      return (
        <div>
          <h2 className="title">Love Lists?</h2>
          <div>
            <div>
              { this.rotatingBooks("Best for Book Clubs") }
            </div>
            <div>
              { this.rotatingBooks("Best Books of the 20th Century")}
            </div>
            <div>
              { this.rotatingBooks("Best Crime & Mystery Books")}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>

        </div>
      );
    }
  }
}

export default SponsorShelfPage;
