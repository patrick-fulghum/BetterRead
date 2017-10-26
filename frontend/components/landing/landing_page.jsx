import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
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
  }

  handleSignup(e) {
    e.preventDefault();
    const myUser = Object.assign({}, this.state);
    this.props.signupAction(myUser);
  }

  renderErrors() {
    if (this.props.errors && this.props.location.pathname !== "/login") {
      return (
        <Redirect to="/login" />
      );
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
            <Link to="/construction">
              <i className="fa fa-user-circle" ></i>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div id="top-level-landing">
          <div id="landing-header">
            <div>
              <Link to="/">
                <img className="logo" src={window.logo} />
              </Link>
            </div>
            <form onSubmit={this.handleLogin} className="landing-login-form">
              <ul className="landing-login-form-ul">
                <li className="float-left sign-items">
                  <input
                    type="text"
                    onChange={this.update('email')}
                    placeholder="Email address"
                    className="landing-login-email block"
                    />
                </li>
                <li className="float-left sign-items">
                  <input
                    type="password"
                    onChange={this.update('password')}
                    className="landing-login-password block"
                    />
                </li>
                <button
                  type="submit"
                  className="link-to-button"
                  >Login</button>
              </ul>
            </form>
            <form onSubmit={this.guestLogin} className="demo">
              <button type="submit" className="demo-button">
                Demo
              </button>
            </form>
          </div>
          <div id="landing-masthead">
            <div id="sub-landing-masthead">
              <h2>
                Meet your next favorite book!
              </h2>
              <div>
                <form onSubmit={this.handleSignup}
                  className="landing-signup-form">
                  <ul className="landing-login-form-ul">
                    <li>
                      New here? Create a free account!
                    </li>
                    <li>
                      <input
                        type="text"
                        onChange={this.update('name')}
                        placeholder="name"
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
