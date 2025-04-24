import React from 'react';
import PropTypes from 'prop-types';

const OverlayContainer = ({ onSignIn, onSignUp }) => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us, please login with your personal info</p>
          <button
            type="button"
            className="ghost"
            onClick={onSignIn}
            aria-label="Sign In"
          >
            Sign In
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your details and start your journey with us</p>
          <button
            type="button"
            className="ghost"
            onClick={onSignUp}
            aria-label="Sign Up"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

OverlayContainer.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired,
};

export default OverlayContainer;