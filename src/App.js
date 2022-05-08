import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [first, changeFirst] = useState("in a Good mood!");
  const [secondary, changeSecondary] = useState("nice");
  console.log(first);

  useEffect(() => {
    console.log(`we are ${first} today`);
  }, [first]);

  useEffect(() => {
    console.log(`It's ${secondary} here`);
  }, [secondary]);

  return (
    <>
      <h1>Today I am {first}</h1>
      <button
        onClick={() => {
          changeFirst("In a happy mood!");
        }}
      >
        Change Mood to happy
      </button>
      <button
        onClick={() => {
          changeFirst("In a sad mood!");
        }}
      >
        Change Mood to sad
      </button>
      <button
        onClick={() => {
          changeFirst("In a frustrated mood!");
        }}
      >
        Change Mood to frustrated
      </button>
      <button
        onClick={() => {
          changeSecondary("Awesome");
        }}
      >
        Change day to Awesome!
      </button>
      <button
        onClick={() => {
          changeSecondary("great");
        }}
      >
        Change day to Great!
      </button>
    </>
  );
}

export default App;
