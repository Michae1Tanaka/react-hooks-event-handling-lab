// Code Keypad Component Here
import React from "react";

function Keypad() {
  const inputHandler = (event) => {
    console.log("Entering password...");
  };
  return (
    <form>
      <input type="password" onChange={inputHandler}></input>
    </form>
  );
}

export default Keypad;
