import './App.css';
import React from "react";

function OS(props) {
  const detail = props.item.map((res) => {
    return <li>{res}</li>;
  });

  return (
    <>
      <h2>{props.name}</h2>
      <ul>{detail}</ul>
    </>
  );
}

function Manufacturers(props) {
  const detail = props.item.map((res) => {
    return React.createElement("li", {}, res);
  });

  return React.createElement("ul", {}, [detail]);
}

export default function App() {
  return (
    <div className="App">
      <h1>React Mobile OS</h1>

      <OS
        item={["Android", "iPhone", "Blackberry", "Windows Phone"]}
        name="Mobile Operating System"
      />
      <h2> Mobile Manufacturers</h2>
      <Manufacturers item={["Samsung", "HTC", "Micromax", "Apple"]} />
    </div>
  );
}
