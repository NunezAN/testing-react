import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment } from "../features/CounterSlice";
import UseCounter from "../useCounter";

export default function Counter() {
  // const { counter, increment , decrement } = UseCounter();
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
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
        onClick={() => dispatch(increment())}
      >
        Add
      </button>
      <button
        className="rounded bg-slate-500 uppercase p-2 w-fit"
        onClick={() => dispatch(decrement())}
      >
        Subtract
      </button>
    </div>
  );
}
