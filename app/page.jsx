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
    <div className="text-2xl text-center text-blue-500">
      <h1>Leran Also Pull-Request</h1>
      welcome to Learn Redux toolkit
      <div style={{ padding: "1rem" }}>
        <button
          onClick={() => dispatch(increment())}
          style={{ marginRight: "1rem" }}
        >
          + Increment
        </button>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(decrement())}>- Decrement</button>
        <br />
        <button onClick={() => dispatch(multiply())}>* multiply</button>
      </div>
      <button
        onClick={() => dispatch(reset())}
        style={{
          backgroundColor: "#f87171",
          color: "white",
          marginLeft: "1rem",
        }}
      >
        Reset
      </button>
    </div>
  );
}
