import React from 'react';


class BookFormPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.state = {
      title: "",
      author: "",
      description: "",
      genre: "",
      imageFile: null,
      imageUrl: null
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let file = this.state.imageFile;
    let formData = new FormData();
    formData.append("book[title]", this.state.title);
    formData.append("book[author]", this.state.author);
    formData.append("book[description]", this.state.description);
    formData.append("book[genre]", this.state.genre);
    formData.append("book[cover]", file);
    this.props.createBook(formData).then(book => {
      debugger
      return this.props.history.push('/')
    });
    // .then((book) => this.props.history.push(`/books/${book.id}`);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file });
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl:"", imageFile: null });
    }
  }

  render() {
    return (
      <div className="book-form-top">
        <div className="book-form-left">
          <div className="title">
            Add a New Book
          </div>
          <br />
          <div>
            Note: Better_Read has over 4 books in its database already,
            so ensure the book you add is not already in the database.
            Please read the guidelines to the right carefully before submission.
          </div>
          <br />
          <form onSubmit={this.handleSubmit} className='book-form-main'>
            <table>
              <tr>
                <td>
                  <label for="book-form-title">Title
                  </label>
                </td>
                <td>
                  <input
                    id="book-form-title"
                    type="text"
                    onChange={this.update('title')}
                    />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="book-form-author">Author
                  </label>
                </td>
                <td>
                  <input
                    id="book-form-author"
                    type="text"
                    onChange={this.update('author')}
                    />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="book-form-description">Description
                  </label>
                </td>
                <td>
                  <textarea
                    id="book-form-description"
                    type="text"
                    onChange={this.update('description')}
                    />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="book-form-genre">Genre
                  </label>
                </td>
                <td>
                  <input
                    id="book-form-genre"
                    type="text"
                    onChange={this.update('genre')}
                    />
                </td>
              </tr>
            </table>
            <label> Upload an Image
              <input
                type="file"
                onChange={ this.updateFile }
                />
            </label>
            <button className="link-to-button book-button">Submit Book</button>
          </form>
        </div>
        <div className="book-form-right">
          <div className="title">
            Guidelines
          </div>
          <ul className="book-form-ul">
            <li>
              Title: If the book is in a series, put which book it is in parenthesis after the title. For example: Harry Potter and the Sorcerer's Stone (Harry Potter, #1).
            </li>
            <li>
              Types of books: Please only add books. Books!
            </li>
            <li>
              Periodicals such as newspapers, magazines, and comics are not books. However a volume of comics or articles or a graphic novel is considered a book.
            </li>
            <li>
              Please don't put any spoilers in the description, use your judgment and don't ruin the book for others!
            </li>
          </ul>
        </div>
      </div>

    );
  }
}
export default BookFormPage;
