import React from 'react';


class BookFormPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: "",
      author: "",
      description: "",
      coverFile: null,
      coverUrl: null
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let file = this.state.imageFile;
    let formData = new FormData();
    formData.append("book[title]", file);
    formData.append("book[author]", file);
    formData.append("book[description]", file);
    formData.append("book[cover]", file);
    createBook(formData);
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
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl:"", imageFile: null });
    }
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
            <label>Description
              <textarea />
            </label>
            <label> Upload an Image
              <input
                type="file"
                onChange={ this.updateFile }
                />
            </label>

          </form>
        </div>
        <div className="book-form-right">

        </div>
      </div>

    );
  }
}
export default BookFormPage;
