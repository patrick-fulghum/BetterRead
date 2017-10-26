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
            <Link to="/construction" className="hover-black">
              My Books
            </Link>
            <div className="hover-black dropdown">
              <button className="drop-button">
                Browse <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-links">
                <Link to="/construction">
                  Recommendations
                </Link>
                <Link to="/construction">
                  Deals
                </Link>
                <Link to="/construction">
                  Choice Awards
                </Link>
                <Link to="/construction">
                  Giveaways
                </Link>
                <Link to="/construction">
                  New Releases
                </Link>
                <Link to="/construction">
                  Lists
                </Link>
                <Link to="/construction">
                  News & Interviews
                </Link>
                <Link to="/construction">
                  Explore
                </Link>
                <Link to="/construction">
                  Blog
                </Link>
              </div>
            </div>
            <div className="hover-black dropdown">
              <button className="drop-button">
                Community  <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-links">
                <Link to="/construction">
                  Groups
                </Link>
                <Link to="/construction">
                  Discussions
                </Link>
                <Link to="/construction">
                  Quotes
                </Link>
                <Link to="/construction">
                  Ask the Author
                </Link>
                <Link to="/construction">
                  Trivia
                </Link>
                <Link to="/construction">
                  Quizzes
                </Link>
                <Link to="/construction">
                  Creative Writing
                </Link>
                <Link to="/construction">
                  People
                </Link>
                <Link to="/construction">
                  Events
                </Link>
              </div>
            </div>
            <div className="hover-black">
              Search Bar PlaceHolder
            </div>
            <Link to="/construction" className="padding-left-a-bit">
              <i className="fa fa-bell"></i>
            </Link>
            <Link to="/construction">
              <i className="fa fa-comments"></i>
            </Link>
            <Link to="/construction">
              <i className="fa fa-envelope"></i>
            </Link>
            <Link to="/construction">
              <i className="fa fa-users"></i>
            </Link>
            <div className="hover-black dropdown">
              <button className="drop-button">
                <i className="fa fa-user-circle" ></i>
              </button>
              <div className="dropdown-links">
                <button onClick={ this.props.logoutAction }>Sign out</button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="top-level-landing">
          <div id="landing-header">
            <Link to="/">
              <img className="logo" src={window.logo} />
            </Link>
            <ul className="landing-login-form-ul">
              <form onSubmit={this.guestLogin} className="demo">
                <li>
                  <button
                    type="submit"
                    className="link-to-button demo-button">
                    Demo
                  </button>
                </li>
              </form>
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
                  Meet your next favorite book!
                </h2>
              </div>
              <div>
                <form onSubmit={this.handleSignup}
                  className="landing-signup-form">
                  <ul className="landing-signup-form-ul">
                    <li id="new-here">
                      New here? Create a free account!
                    </li>
                    <li>
                      <input
                        type="text"
                        onChange={this.update('name')}
                        placeholder="Name"
                        />
                    </li>
                    <li>
                      <input
                        type="text"
                        onChange={this.update('email')}
                        placeholder="Email Address"
                        className="landing-signup-email"
                        />
                    </li>
                    <li>
                      <input
                        type="password"
                        onChange={this.update('password')}
                        className="landing-signup-password"
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
