import { connect } from 'react-redux';

class ReviewFormPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit =this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return(
      <div id="review-form">
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
    );
  }
}
