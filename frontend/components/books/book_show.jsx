import React from 'react';

class BookShowPage extends React.Component {

  componentDidMount() {
    this.props.fetchBook(this.props.match.url.slice(7));
  }

  componentWillReceiveProps(nextProp) {
    this.props.fetchBook(nextProp.match.url.slice(7));
  }

  render(){
    let title;
    if (this.props.books) {
      title = this.props.books.subtitle ?
      `${this.props.books.title}: ${this.props.books.subtitle}` :
      `${this.props.books.title}`;
      return (
        <div id="book-show-page">
          <div>
            <img src={this.props.books.cover} />
          </div>
          <div>
            <div>
              {title}
            </div>
            <div>
              By {this.props.books.author}
            </div>
            <div>
              {this.props.books.description}
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
