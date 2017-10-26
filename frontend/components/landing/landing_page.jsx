import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/");
    }
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
    return (
    <ul className="placeholder">
      { this.props.errors.map((err, index) => (
        <li key={index }>
          { err }
        </li>
      ))}
    </ul>
    );
  }

  render() {
    return (
      <div>
        <div id="landing-header">
          <form onSubmit={this.handleLogin} className="landing-login-form">
            <ul className="landing-login-form-ul">
              <li>
                {this.renderErrors()}
              </li>
              <li>
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update('email')}
                  placeholder="Email address"
                  className="landing-login-email"
                  />
              </li>
              <li>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="landing-login-password"
                  />
              </li>
              <button
                type="submit"
                className="landing-form-submission-box"
                >Sign In</button>
            </ul>
          </form>
        </div>
        <div id="landing-masthead">
          <form onSubmit={this.handleSignup} className="landing-signup-form">
            <ul>
              <li>
                New here? Create a free account!
              </li>
              <li>
                <input
                  type="text"
                  value={this.state.password}
                  onChange={this.update('email')}
                  placeholder="Email Address"
                  className="landing-signup-email"
                  />
              </li>
              <li>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="landing-signup-password"
                  />
              </li>
              <button>
                type="submit"
                className="landing-signup-submission"
              </button>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}
