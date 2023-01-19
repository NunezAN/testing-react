import { useState } from "react";
import UseCounter from "./useCounter";
import UseLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

function App() {
  const { counter, increment } = UseCounter();
  // useUpdateLogger(count);
  // function handleAddition() {
  //   setCount((cur) => cur + 1);
  // }
  return (
    <div className="flex flex-col p-8 items-center">
      <span className="text-2xl">{counter}</span>
      <button
        className="rounded bg-slate-500 uppercase p-2 w-fit"
        onClick={increment}
      >
        Add
      </button>
    </div>
  );
}

export default App;
