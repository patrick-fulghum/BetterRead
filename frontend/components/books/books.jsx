import React from 'react';

class BookShowPage extends React.Component {
  render(){
    if (this.props.books) {
      return (
        <div>
          <img src={this.props.books.cover} />
          Book Show Page
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
