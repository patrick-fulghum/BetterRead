import React from 'react';


class BookFormPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.book;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.props.book).then(() => this.props.history.push('/'));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader(); 
  }

  render() {
    return (
      <div>
        <div className="book-form-left">
          <div className="title">
            Add a New Book
          </div>
          <div>
            Note: Better_Read has over 4 books in its database already,
            so ensure the book you add is not already in the database.
            Please read the guidelines to the right carefully before submission.
          </div>
          <form onSubmit={this.handleSubmit}>
            <label>Title
              <input
                type="text"
                onChange={this.update('title')}
                />
            </label>
            <label>Author
              <input
                type="text"
                onChange={this.update('author')}
                />
            </label>
            <label>Desciption
              <textarea />
            </label>
            <label>

            </label>

          </form>
        </div>
        <div className="book-form-right">

        </div>
      </div>

    );
  }
}
