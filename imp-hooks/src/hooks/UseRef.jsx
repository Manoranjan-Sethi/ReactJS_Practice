import React, { useState, useRef, useEffect } from "react";

function UseRef() {
  const [name, setname] = useState("");
  //   const [renders, setRenders] = useState(0);

  //   useEffect(() => {
  //     setRenders((e) => e + 1);
  //   }); goes into infinite loop

  const renders = useRef(0); //creation of mutable variables

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const element = useRef(); // allows to access DOM elements

  function incrInp() {
    element.current.style.width = "400px";
  }

  return (
    <div>
      <input type="text" onChange={(e) => setname(e.target.value)} />
      <h3>Name : {name}</h3>
      <input type="text" ref={element} />
      <button onClick={incrInp}>Increase Input Length</button>
      <h3>Number of renders are : {renders.current}</h3>
    </div>
  );
}

export default UseRef;
