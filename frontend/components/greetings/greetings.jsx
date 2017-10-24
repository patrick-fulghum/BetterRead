import React from 'react';
import { Link } from 'react-router-dom';

const Greetings = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <h2>Welcome {currentUser.email}</h2>
        <button onClick={ logout }>Sign out</button>
      </div>
    );
  }
  else {
    return (
      <div>
        <h2>You are not Signed in</h2>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
};

export default Greetings;
