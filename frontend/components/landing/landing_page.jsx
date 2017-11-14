import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      login: false,
      signup: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleLogin(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.loginAction(user);
    this.setState({login: true});
  }

  handleSignup(e) {
    e.preventDefault();
    const myUser = Object.assign({}, this.state);
    this.props.signupAction(myUser);
    this.setState({signup: true});
  }

  clearErrors() {
    if (this.props.errors) {
      this.props.clearErrors();
    }
  }

  redirectToLoginIfErrors() {
    if (this.props.errors && this.state.login) {
      this.props.history.push("/login");
      this.state.login = false;
    }
  }

  redirectToSignUpIfErrors() {
    if (this.props.errors && this.state.signup) {
      this.props.history.push("/signup");
      this.state.signup = false;
    }
  }

  guestLogin() {
    let guest = {
      email: "BetterReadGuest",
      password: "password",
      name: "Guest",
    };
    this.props.loginAction(guest);
  }

  componentDidUpdate() {
    this.redirectToSignUpIfErrors();
    this.redirectToLoginIfErrors();
  }


  render() {
    if (this.props.loggedIn) {
      return (
        <div className="top-level-landing">
          <div className="landing-header">
            <Link to="/">
              <img className="logo" src={window.logo} />
            </Link>
            <Link to="/" className="hover-black">
              Home
            </Link>
            <Link to="/" className="hover-black">
              My Books
            </Link>
            <div className="hover-black dropdown">
              <button className="drop-button">
                Browse <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-links">
                <Link to="/">
                  Recommendations
                </Link>
                <Link to="/">
                  Deals
                </Link>
                <Link to="/">
                  Choice Awards
                </Link>
                <Link to="/">
                  Giveaways
                </Link>
                <Link to="/">
                  New Releases
                </Link>
                <Link to="/">
                  Lists
                </Link>
                <Link to="/">
                  News & Interviews
                </Link>
                <Link to="/">
                  Explore
                </Link>
                <Link to="/">
                  Blog
                </Link>
              </div>
            </div>
            <div className="hover-black dropdown">
              <button className="drop-button">
                Community  <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-links">
                <Link to="/">
                  Groups
                </Link>
                <Link to="/">
                  Discussions
                </Link>
                <Link to="/">
                  Quotes
                </Link>
                <Link to="/">
                  Ask the Author
                </Link>
                <Link to="/">
                  Trivia
                </Link>
                <Link to="/">
                  Quizzes
                </Link>
                <Link to="/">
                  Creative Writing
                </Link>
                <Link to="/">
                  People
                </Link>
                <Link to="/">
                  Events
                </Link>
              </div>
            </div>
            <div className="hover-black dropdown">
              <button className="drop-button">
                Create  <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-links">
                <Link to="/">
                  Book
                </Link>
                <Link to="/">
                  Shelf
                </Link>
                <Link to="/">
                  Review
                </Link>
              </div>
            </div>
            <div className="hover-black">
              <Link to='/books/new'>
                Create a Book
              </Link>
            </div>
            <div className="hover-black dropdown">
              <button className="drop-button">
                <i className="fa fa-user-circle" ></i>
              </button>
              <div className="dropdown-links">
                <Link to='/profile'>
                  Profile
                </Link>
                <Link
                  to='/'
                  onClick={ this.props.logoutAction }>Sign Out
                </Link>
              </div>
            </div>
            <Link to="/" className="padding-left-a-bit">
              <i className="fa fa-bell"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-comments"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-envelope"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-users"></i>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div id="top-level-landing">
          <div id="landing-header">
            <Link to="/">
              <img className="logo" id="not-logged-in-logo" src={window.logo} />
            </Link>
            <ul className="landing-login-form-ul">
              <li>
                <button
                  onClick={this.guestLogin}
                  className="link-to-button demo-button">
                  Demo
                </button>
              </li>
              <form onSubmit={this.handleLogin} className="landing-login-form">
                <li className="float-left sign-items">
                  <input
                    type="text"
                    onChange={this.update('email')}
                    placeholder="Email address"
                    className="landing-login-form-input block"
                    />
                </li>
                <li className="float-left sign-items">
                  <input
                    type="password"
                    onChange={this.update('password')}
                    placeholder="Password"
                    className="landing-login-form-input block"
                    />
                </li>
                <button
                  type="submit"
                  className="login-button link-to-button"
                  >Login</button>
              </form>
            </ul>
          </div>
          <div id="landing-masthead">
            <div id="sub-landing-masthead">
              <div id="header-container">
                <h2 id="favorite-book-header">
                  Meet your next favorite book.
                </h2>
              </div>
              <div>
                <form onSubmit={this.handleSignup}
                  className="landing-signup-form">
                  <ul className="landing-signup-form-ul">
                    <li className="access" id="new-here">
                      New here? Create a free account!
                    </li>
                    <li className="access" >
                      <input
                        type="text"
                        onChange={this.update('name')}
                        placeholder="Name"
                        className="access"
                        />
                    </li>
                    <li className="access">
                      <input
                        type="text"
                        onChange={this.update('email')}
                        placeholder="Email Address"
                        />
                    </li>
                    <li className="access">
                      <input
                        type="password"
                        onChange={this.update('password')}
                        placeholder="Password"
                        />
                    </li>
                    <button
                      type="submit"
                      className="landing-signup-submission"
                      >Sign Up</button>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

}

export default LandingPage;
