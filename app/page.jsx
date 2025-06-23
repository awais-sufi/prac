// app/page.jsx
"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  multiply,
  reset,
} from "./libs/features/counterSlice";

export default function HomePage() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-2xl text-center text-blue-500">
        <h1 className="text-2xl text-lime-500 py-5">Leran Also Pull-Request</h1>
        welcome to Learn Redux toolkit
        <div className="flex justify-center items-center py-5">
          <button
            className="bg-amber-600 rounded-3xl px-5 py-3"
            onClick={() => dispatch(decrement())}
          >
            <span className="text-white">Decrement -</span>
          </button>
          <h1 className="px-5">Count: {count}</h1>
          <button
            onClick={() => dispatch(increment())}
            className="bg-amber-600 rounded-3xl px-5 py-3"
          >
            <span className="text-white">increment +</span>
          </button>
          <br />
        </div>
        <button
          className="bg-amber-600 rounded-3xl px-5 py-3"
          onClick={() => dispatch(multiply())}
        >
          <span className="text-white">multiply *</span>
        </button>
      </div>
      <div className="flex items-center justify-center mt-5">
        <button
          className="bg-red-600  rounded-3xl px-5 py-3"
          onClick={() => dispatch(reset())}
        >
          <span className="text-white text-2xl">Reset</span>
        </button>
      </div>
    </>
  );
}
