import { useState } from "react";
import UseLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

function App() {
  const [count, setCount] = UseLocalStorage("count", 0);
  useUpdateLogger(count);
  function handleAddition() {
    setCount((cur) => cur + 1);
  }
  return (
    <div className="flex flex-col p-8 items-center">
      <span className="text-2xl">{count}</span>
      <button
        className="rounded bg-slate-500 uppercase p-2 w-fit"
        onClick={handleAddition}
      >
        Add
      </button>
    </div>
  );
}

export default App;
