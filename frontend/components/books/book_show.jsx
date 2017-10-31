import React from 'react';
import { Link } from 'react-router-dom';
import Discovery from '../discovery/discovery_container';

class BookShowPage extends React.Component {

  componentDidMount() {
    this.props.fetchBook(this.props.match.url.slice(7));
  }

  componentDidReceiveProps(nextProp) {
    let currentUrl = nextProp.match.url.slice(7);
    // if (this.props.books.id !== currentUrl) {
    this.props.fetchBook(currentUrl);
    // }
  }

  render(){
    let subtitle;
    if (this.props.books) {
      subtitle = this.props.books.subtitle ?
      `${this.props.books.subtitle}` : ``;
      return (
        <div id="book-show-main">
          <div id="book-show-page">
            <div id="book-show-cover">
              <img src={this.props.books.cover} />
              <div className="want-to-read">
                <button classname="" onClick="">
                  <Link to="/construction">
                    <img src={window.wanna_read} />
                  </Link>
                </button>
              </div>
              <div id="book-rating-title">
                Rate This Book
              </div>
              <div className="stars">
                <form onSubmit={this.handleSubmit}>
                  <input className="star star-1" id="star-1" type="radio" />
                  <label className="star star-1 fa fa-star" for="star-1"></label>
                  <input className="star star-2" id="star-2" type="radio" />
                  <label className="star star-2 fa fa-star" for="star-2"></label>
                  <input className="star star-3" id="star-3" type="radio" />
                  <label className="star star-3 fa fa-star" for="star-3"></label>
                  <input className="star star-4" id="star-4" type="radio" />
                  <label className="star star-4 fa fa-star" for="star-4"></label>
                  <input className="star star-5" id="star-5" type="radio" />
                  <label className="star star-5 fa fa-star" for="star-5"></label>
                </form>
              </div>
            </div>
            <div id="book-show-info">
              <div className="title">
                {this.props.books.title}
                <br />
                <i className="italics">{subtitle}</i>
              </div>
              <div>
                By {this.props.books.author}
              </div>
              <div>
                {this.props.books.description}
              </div>
            </div>
            <div className="discovery-main" id="book-show-discovery">
              <div className="discovery-p-tags">
                <p>Because You liked...</p>

                <p>You May Like:</p>
              </div>
              <br />
              <ul className="book-listing">
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
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

export default BookShowPage;
