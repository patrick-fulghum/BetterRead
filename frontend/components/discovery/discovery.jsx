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

  rotatingBooks() {
    let sample = Object.keys(this.props.books).length;
    let randomNums = [];
    while (randomNums.length < 5) {
      let randomNum = Math.floor(Math.random()*sample);
      if (!randomNums.includes(Object.keys(this.props.books)[randomNum])) {
        randomNums.push(Object.keys(this.props.books)[randomNum]);
      }
    }
    return (
      <ul className="book-listing">
        <li className="book-promotion">
          <Link to={`/books/${randomNums[0]}`}>
            <img className="discovery-image" src={this.props.books[randomNums[0]].cover}/>
          </Link>
        </li>
        <li className="book-promotion">
          <Link to={`/books/${randomNums[1]}`}>
            <img className="discovery-image" src={this.props.books[randomNums[1]].cover}/>
          </Link>
        </li>
        <li className="book-promotion">
          <Link to={`/books/${randomNums[2]}`}>
            <img className="discovery-image" src={this.props.books[randomNums[2]].cover}/>
          </Link>
        </li>
        <li className="book-promotion">
          <Link to={`/books/${randomNums[3]}`}>
            <img className="discovery-image" src={this.props.books[randomNums[3]].cover}/>
          </Link>
        </li>
        <div className="arrow-box">
          <i className="fa fa-arrow-right"></i>
        </div>
        <li className="book-promotion">
          <Link to={`/books/${randomNums[4]}`}>
            <img className="discovery-image" src={this.props.books[randomNums[4]].cover}/>
          </Link>
        </li>
      </ul>
    );
  }

  render() {
    if (Object.keys(this.props.books).length > 4) {
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
            {this.rotatingBooks()}
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

export default DiscoveryPage;
