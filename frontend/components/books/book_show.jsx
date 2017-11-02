import React from 'react';
import { Link } from 'react-router-dom';
import Discovery from '../discovery/discovery_container';

class BookShowPage extends React.Component {

  constructor(props) {
    super(props);
    this.bookReview = this.bookReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchBook(this.props.match.url.slice(7));
    this.props.fetchUsers();
  }

  componentWillUpdate(nextProp) {
    let currentUrl = nextProp.match.url.slice(7);
    if (this.props.books && this.props.books.id != currentUrl) {
      this.props.fetchBook(currentUrl);
    }
  }

  handleSubmit() {

  }

  allBookReviews() {
    let numReviews = this.props.books.reviews.length;
    let array = [];
    for (let i = numReviews - 1; i >= 0; i--) {
      array.push(i);
    }
    return (
      <div>
          {
            array.map((num) => (
              this.bookReview(num)
            ))
          }
      </div>
    );
  }

  bookReview(num) {
    let review = this.props.books.reviews[num];
    let reviewer = this.props.users[review.author_id].name;
    let creation = String(new Date(review.created_at)).slice(4,15);
    if (review.rating === 5) {
      return (
        <div>
          <div className="review-body">
            <div className="review-title">
              <div>
                { reviewer } rated it &nbsp;

                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div>
                { creation }
              </div>
            </div>
          </div>
          <div>
            { review.body }
          </div>
        </div>
      );
    }
    if (review.rating === 4) {
      return (
        <div>
          <div className="review-body">
            <div className="review-title">
              <div>
                { reviewer } rated it &nbsp;

                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <div>
                { creation }
              </div>
            </div>
          </div>
          <div>
            { review.body }
          </div>
        </div>
      );
    }
    if (review.rating === 3) {
      return (
        <div>
          <div className="review-body">
            <div className="review-title">
              <div>
                { reviewer } rated it &nbsp;

                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <div>
                { creation }
              </div>
            </div>
          </div>
          <div>
            { review.body }
          </div>
        </div>
      );
    }
    if (review.rating === 2) {
      return (
        <div>
          <div className="review-body">
            <div className="review-title">
              <div>
                { reviewer } rated it &nbsp;

                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <div>
                { creation }
              </div>
            </div>
          </div>
          <div>
            { review.body }
          </div>
        </div>
      );
    }
    if (review.rating === 1) {
      return (
        <div>
          <div className="review-body">
            <div className="review-title">
              <div>
                { reviewer } rated it &nbsp;

                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <div>
                { creation }
              </div>
            </div>
          </div>
          <div>
            { review.body }
          </div>
        </div>
      );
    }
  }

  bookRating() {
    let rating_sum = 0;
    let num_rating = this.props.books.reviews.length;
    this.props.books.reviews.forEach(r => {
      rating_sum += r.rating;
    });
    let final_rating = (Math.round((rating_sum / num_rating) * 100) / 100);
    if (this.props.books.reviews.length === 0) {
      return (
        <div>
          No Reviews yet exist for this book. Write one!
        </div>
      );
    }
    if (final_rating < 1.3) {
      return(
        <div>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
          <i>   </i>
          <i>   </i>
          Overall Rating: { final_rating }
        </div>
      )
    }
    if (final_rating < 1.7) {
      return(
        <div>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
          <i>   </i>
          <i>   </i>
          Overall Rating: { final_rating }
        </div>
      )
    }
    if (final_rating < 2.3) {
      return(
        <div>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
          <i>   </i>
          <i>   </i>
          Overall Rating: { final_rating }
        </div>
      )
    }
    if (final_rating < 2.7) {
      return(
        <div>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
          <i>   </i>
          <i>   </i>
          Overall Rating: { final_rating }
        </div>
      )
    }
    if (final_rating < 3.3) {
      return(
        <div>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o"></i>
          <i className="fa fa-star-o"></i>
          <i>   </i>
          <i>   </i>
          Overall Rating: { final_rating }
        </div>
      )
    }
    if (final_rating < 3.7) {
      return(
        <div>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half"></i>
          <i className="fa fa-star-o"></i>
          <i>   </i>
          <i>   </i>
          Overall Rating: { final_rating }
        </div>
      )
    }
    if (final_rating < 4.3) {
      return(
        <div>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o"></i>
          <i>   </i>
          <i>   </i>
          Overall Rating: { final_rating }
        </div>
      )
    }
    if (final_rating < 4.7) {
      return(
        <div>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half"></i>
          <i>   </i>
          <i>   </i>
          Overall Rating: { final_rating }
        </div>
      )
    }
    else {
      return(
        <div>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i>   </i>
          <i>   </i>
          Overall Rating: { final_rating }
        </div>
      )
    }
  }

  userShelves() {
    if (this.props.currentUser) {
      this.props.currentUser.bookshelves
    }
    return (
      <div className="dropdown-links">
        <Link to="construction">
          currently-reading
        </Link>
        <Link to="construction">
          read
        </Link>
        <Link to="construction">
          want-to-read
        </Link>
      </div>
    );
  }

  render(){
    let subtitle;
    if (this.props.books &&
      this.props.users &&
      Object.keys(this.props.books).length > 0 &&
      Object.keys(this.props.users).length > 0) {
      return (
        <div id="book-show-main">
          <div id="book-show-page">
            <div id="book-show-cover">
              <img src={this.props.books.cover} />
              <div className="want-to-read dropdown">
                <button className="drop-button">
                  <img src={window.wanna_read} />
                </button>
                { this.userShelves() }
              </div>
              <div id="book-rating-title">
                Rate This Book
              </div>
              <div className="stars">
                <form onClick={this.handleSubmit}>
                  <input className="star star-1" id="star-1" type="radio" />
                  <label className="star star-1 fa fa-star" htmlFor="star-1"></label>
                  <input className="star star-2" id="star-2" type="radio" />
                  <label className="star star-2 fa fa-star" htmlFor="star-2"></label>
                  <input className="star star-3" id="star-3" type="radio" />
                  <label className="star star-3 fa fa-star" htmlFor="star-3"></label>
                  <input className="star star-4" id="star-4" type="radio" />
                  <label className="star star-4 fa fa-star" htmlFor="star-4"></label>
                  <input className="star star-5" id="star-5" type="radio" />
                  <label className="star star-5 fa fa-star" htmlFor="star-5"></label>
                </form>
              </div>
            </div>
            <div id="book-show-info">
              <div className="title">
                {this.props.books.title}
              </div>
              <div>
                <br />
                <div className="book-show-sub-title">
                  By {this.props.books.author}
                </div>
                <br />
                <div>
                  { this.bookRating() }
                </div>
                <br />
              </div>
              <div>
                {this.props.books.description}
              </div>
              <br />
              <div className="title">
                Community Reviews
              </div>
              <div>
                { this.allBookReviews() }
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
