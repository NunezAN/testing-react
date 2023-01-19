import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-4xl text-bold uppercase text-center">Home</span>

      <Link to="/counter" className="p-2 bg-slate-400 uppercase w-fit">
        Counter
      </Link>
    </div>
  );
}
