import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="App">
      <h1>Axios</h1>
      {error != "" && <h2>{error}</h2>}
      <div className="grid">
        {data.map((ele) => {
          return (
            <div className="card" key={ele.id}>
              <h2>{ele.title}</h2>
              <p>{ele.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
