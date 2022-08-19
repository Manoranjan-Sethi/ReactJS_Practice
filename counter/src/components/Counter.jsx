import React from "react";

export const Counter = (props) => {
  const { count, addOne, subOne, double } = props;
  return (
    <div>
      <h1>Counter :{count} </h1>
      <h1 style={{ color: count % 2 === 0 ? "green" : "red" }}>
        {" "}
        {count % 2 === 0 ? "Counter is Even" : "Counter is Odd"}
      </h1>
      <button onClick={addOne}>Increment</button>
      <button onClick={subOne}>Decrement</button>
      <button onClick={double}>Double</button>
    </div>
  );
};
