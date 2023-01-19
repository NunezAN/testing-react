import React, { useEffect } from "react";
import { useState } from "react";
import useUpdateLogger from "./useUpdateLogger";

const getSavedValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (initialValue instanceof Function) {
    return initialValue();
  } else {
    return initialValue;
  }
};

const UseLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, value);
    
  }, [value]);
  return [value, setValue];
};

export default UseLocalStorage;
