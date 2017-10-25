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
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit} className="formBox">
          <h1>Welcome to the {this.props.match.path.slice(1)} Page</h1>
          {this.renderErrors()}
          <div className="formLogin">
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('email')}
              className="formLoginBox"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="formPasswordBox"
            />
            <input
              type="submit"
              value="Submit"
              className="formSubmissionBox"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
