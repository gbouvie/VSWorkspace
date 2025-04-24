import React from 'react';
import OverlayContainer from './components/OverlayContainer';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import './styles/style.css';

function App() {
  return (
    <div className="container" id="container">
      <SignUpForm />
      <SignInForm />
      <OverlayContainer />
    </div>
  );
}

export default App;