import React from 'react';
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm( user );
  }

  renderErrors() {
    return (
      <ul className="form-login">
        { this.props.errors.map((err, index) => (
          <li key={index}>
            { err }
            </li>
        ))}
      </ul>
    );
  }

  render() {
    let path = this.props.location.pathname;
    let contingentRendering;
    if (path === "/signup") {
      contingentRendering = (
        <div>
          <div className="side-by-side">
            Already A Member?
          </div>
          <div className="side-by-side">
            <Link to="/login" className="link-to-button">Login</Link>
          </div>
        </div>
      );
    }
    else if (path === "/login") {
      contingentRendering = (
        <div>
          <div className="side-by-side">
            Not A Member?
          </div>
          <div className="side-by-side">
            <Link to="/signup" className="link-to-button">Sign Up</Link>
          </div>
        </div>
      );
    }
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="form-box">
          <ul className="form-login">
            <li>
              {this.renderErrors()}
            </li>
            <li className="float-left sign-items">
              <label className='block'>Email Address
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update('email')}
                  placeholder="you@yours.com"
                  className="block"
                  />
              </label>
            </li>
            <li className="float-left sign-items">
              <label className='block'>Password
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="block"
                  />
              </label>
            </li>
            <button
              type="submit"
              className="form-submission-box"
            >{path.slice(1)}</button>
        </ul>
        </form>
        <div className="top-right">
          {contingentRendering}
        </div>
        <div>
          <img className="footer" src={window.bookrow}></img>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
