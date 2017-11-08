<p align="center">
<img src="https://raw.githubusercontent.com/patrick-fulghum/BetterRead/master/app/assets/images/better_read_fourth_draft.png"/> </p>
<h1 align="center">Better-Read</h1>

## The better place for discovering your next favorite book!

This repository contains the source code for the better-read application, a clone of GoodReads, hosted on Heroku. See x`xthe live app at the following link: [better-read](https://better-read.herokuapp.com/?#/). The overall structure of the application has been written in a rails project. The back-routes are within config/routes.rb, the frontend routes are within frontend/components/app.jsx. Rather than utilizing the traditional model view controller system of Rails, this application reduces the view component to only a few lines of jbuilder. This jbuilder will serve up the data as a javascript object to the frontend. The frontend is written in JavaScript using a React to render components to the page, and Redux to serve the state to the React component.



This application runs in Rails 5.1.

## Table of Contents

* Schema
* Features
* Usage
* Issues

## Schema

The database used for this application is Postgres.

The structure of the tables can be seen below, and while it is omitted in each table, each entry has timestamps as well.


### users

| id        | email           | password_digest  |  session_token  |
| ------------- |:-------------:| -----:| -----:|
| primary-key     | example@example.net | x | y |


### books

| id        | title           | description  |  genre  | cover |
| ------------- |:-------------:| -----:| -----:| ------:|
| primary-key     | example book | brief synopsis | example Genre | image url hosted on amazon web services |

### bookshelves

| id        | owner_id           | category  |
| ------------- |:-------------:| -----:|
| primary-key     | users-foreign-key | have-read, will-read etc. |

### reviews

| id        | rating           | body  |  author_id  | book_id |
| ------------- |:-------------:| -----:| -----:| ----:|
| primary-key    | Number of stars | review literal | user-foreign-key  | book-foreign-key |

### bookshelf_items

| id        |     book_id       | bookshelf_id  |
| ------------- |:-------------:| -----:|
| primary-key     | book-foreign-key | bookshelf-foreign-key |

### quotes

| id        |     author       | category  | content | portrait |
| ------------- |:-------------:| -----:| -----:|--------:|
| primary-key     | quote speaker | funny, life, etc. | quote literal | image hosted on AWS. |

## Features

### Authentication

* Demo Login

* Account Creation on either home page or session page

* User is logged in automatically upon creating account.

* Account persists through logouts, and user can log back in.

* If account creation or login are done improperly, the appropriate error response is rendered as well as the proper redirect.

* The backend utilizes the ruby gem BCrypt as well SecureRandom to encrypt user passwords, and store the hashed values to protect user passwords. The user's password is never directly stored in the database.
```Ruby
def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end
```

This ruby method converts the stored password digest string into a BCrypt object, then checks whether the passed password matches utilizing the is_password instance method of BCrypt.

### Books

* Contains reviews as well as the overall rating for the book. On the book show page the user can rate the book a certain number of stars out of 5. The description of the book, as well as the title author and book cover are visible as well.

* Books can be created at the link books/new which can be found on the create a book link in the main header bar when a user is logged in. If the user is not logged in the link will not appear.

* A great challenge to creating books was allowing users to upload pictures and to host them, using the ruby paperclip gem, on amazon web services. Beyond simply constructing the dataForm object in the react component, the ajax call had to be written in a totally different way in order to serve up the formData.

```javascript
export const createBook = (formData) => {
  return $.ajax({
    url: `api/books`,
    method: "POST",
    contentType: false,
    processData: false,
    dataType: "json",
    data: formData,
  });
};
```

### Error Handling

* The Authentication step renders the correct errors at the right time and will also clear the errors if the user navigates to another part of the application. The clearance of errors was difficult to implement.

```javascript
export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), error => {
    return dispatch(receiveErrors(error.responseJSON))
  })
);
```
Here the thunk error action will dispatch the receiveErrors action if the promise returns an error rather than a user. The reducer then takes this action and serves it up to the state. Once this state is  mapped to the session component's props, the renderErrors function then yields each error as a list element within an unordered list:

```javascript
{ this.props.errors.map((err, index) => (
  <li key={index}>
    { err }
    </li>
))}
```

The error reducer file is responsible for reducing all the particular errors into the root reducer so that when the errors are ultimately served up to the state, all the errors can be found in one slice.

### Discovery

* React components on the page will suggest books to the user that may interest them. The user can select the book itself to be redirected to the book show page and see more information on the book.


## Usage


To run this on localhost:3000, do the following:

1. Clone this repository

2. delete the gemfile.lock

3. run bundle install in terminal

4. run npm run webpack in terminal

5. Open localhost:3000 in a google-chrome browser.


## Known Bugs

* When using the back button in browser, the book show page will sometimes fail to load.

* Link to pages under construction render a blank page.

* Non-users can create books without being logged in.

* Book Preview on book creation page does not render.

## Unhandled Errors

* Creating a username that already exists in the database.

* Incorrectly creating a book.

## Features to Implement

* updating an existing book the user created themselves.

* writing a review and having it persist to the database.

* Editing or Deleting user created review.

* Add books to user shelves, as well as create custom shelves.

* Robust Profile page displaying users shelves.
