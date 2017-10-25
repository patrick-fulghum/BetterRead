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
      <ul>
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
          <div>
            Already A Member?
          </div>
          <Link to="/login">Login</Link>
        </div>
      );
    }
    else if (path === "/login") {
      contingentRendering = (
        <div>
          <div>
            Not A Member?
          </div>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit} className="form-box">
          {this.renderErrors()}
          <div className="form-login">
            <div className="float-left">
              <label className='block'>Email Address
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update('email')}
                  placeholder="you@yours.com"
                  className="block"
                  />
              </label>
            </div>
            <div className="float-left">
              <label className='block'>Password
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="block"
                  />
              </label>
            </div>
            <button
              type="submit"
              className="form-submission-box"
            >{path.slice(1)}</button>
          </div>
        </form>
        <div className="top-right">
          {contingentRendering}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
