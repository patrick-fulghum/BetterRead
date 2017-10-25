import React from 'react';
import { Link } from 'react-router-dom';

const Greetings = ({ currentUser, logout }) => {
  let location = window.location.href.slice(24);
  if (currentUser) {
    return (
      <div>
        <h2>Welcome {currentUser.email}</h2>
        <button onClick={ logout }>Sign out</button>
      </div>
    );
  }
  else if (location !== "signup") {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  } else if (location !== "login") {
    return (
      <div>
        <Link to="/login">Login</Link>
      </div>
    );
  }
};

export default Greetings;
