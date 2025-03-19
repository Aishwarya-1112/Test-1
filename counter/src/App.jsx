import { useState } from "react";
import { BrowserRouter, Link, Links, Route, Routes } from "react-router";
import "./App.css";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => setCount(count + 1);

  const Decrement = () => setCount(count - 1);

  return (
    <>
      <button onClick={Increment}>+</button>
      <h1>{count}</h1>
      <button onClick={Decrement}>-</button>
    </>
  );
}

export default App;
