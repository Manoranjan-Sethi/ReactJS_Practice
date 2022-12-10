import React, { useState, useMemo } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const memoCal = useMemo(() => {
    return expensiveFun(number);
  }, [number]);

  // const cal = expensiveFun(number);

  const themeToggle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={themeToggle}>
      <input
        type="number"
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <h3>Calculation : {memoCal}</h3>
      <button
        onClick={() => {
          setDark(!dark);
        }}
      >
        Change Theme
      </button>
    </div>
  );

  function expensiveFun(num) {
    console.log("loop Starts...");
    for (let i = 0; i < 1000000000; i++) {}
    return num;
  }
}

export default UseMemo;
