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
    this.props.determineForm({ user });
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
          {this.renderErrors()}
          <div className="formLogin">
            <input
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
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
