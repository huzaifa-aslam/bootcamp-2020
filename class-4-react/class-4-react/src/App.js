import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    let [count, setCount] = useState(0)
    return (

      <>
      {count}
      <button onClick={()=>setCount(count++)}>click me</button>
      </>
    );
}

export default App;