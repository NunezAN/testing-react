import React from "react";
import { useState } from "react";

const UseCounter = () => {
  const [counter, setCounter] = useState(0);
  return {
    counter,
    increment:()=> setCounter((cur) => cur + 1),
  };
};

export default UseCounter;
