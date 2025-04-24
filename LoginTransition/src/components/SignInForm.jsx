import React from 'react';

const SignInForm = () => {
  return (
    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Sign in</h1>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;