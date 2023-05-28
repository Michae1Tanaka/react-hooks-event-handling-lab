// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  const onFocusHandler = (e) => {
    console.log("Good!");
  };
  const onBlurHandler = (e) => {
    console.log("Hey! Eyes on me!");
  };
  return (
    <button onFocus={onFocusHandler} onBlur={onBlurHandler}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
