import React from "react";
import { Link } from "react-router-dom";
import UseCounter from "../useCounter";

export default function Counter() {
  const { counter, increment } = UseCounter();
  // useUpdateLogger(count);
  // function handleAddition() {
  //   setCount((cur) => cur + 1);
  // }
  return (
    <div className="flex flex-col p-8 items-center">
      <Link to="/">Back</Link>
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
