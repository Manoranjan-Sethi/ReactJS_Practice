import React, { useState } from "react";

function UseState() {
  //method-1
  const array = useState(0);
  const counter1 = array[0];
  const setCounter1 = array[1];
  console.log("array - ", array);
  console.log("counter - ", counter);

  //method-2
  // const[currentValue, function that changes value ] = useState(dependancy);
  const [counter2, setCounter2] = useState(0);
  const [text, setText] = useState("");

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  //method-3
  const [deatils, setDeatils] = useState({ counter: 0, name: "Man" });

  const counter = () => {
    setDeatils((prv) => ({
      ...prv,
      counter: prv.counter + 1,
    }));
  };
  return (
    <div>
      <input type="text" onChange={(e) => setDeatils(e.target.value)} />
      <h1>
        {deatils.text} has clicked Counter : {deatils.counter} times
      </h1>
      <button onClick={counter}>Increase</button>
    </div>
  );
}

export default UseState;
