import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, iure odio odit saepe fugiat dignissimos, perspiciatis, consequuntur ipsam voluptatem obcaecati minima? In obcaecati nam, itaque architecto ea ullam totam soluta.</p>
    </div>
  );
}

export default Rainbow(About);