// write code for Welcome component here
import React from "react";

const Welcome = (props) => {
  return (
    <>
      <h1>Hey {props.name}!</h1>
      <h2>Welcome to school.</h2>
    </>
  );
};

export default Welcome;
