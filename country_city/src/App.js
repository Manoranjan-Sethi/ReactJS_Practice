import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [country, setCountry] = useState([]);
  const [getCountry, setGetCountry] = useState("");

  const fetchCountry = async () => {
    try {
      const countries = await axios.get(
        "https://countriesnow.space/api/v0.1/countries"
      );
      // console.log(countries.data.data);
      setCountry(countries.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <div className="App">
      <h1>Select Your Hometown</h1>
      <div className="AppHeader">
        <div>
          {country && (
            <select
              onChange={(e) => setGetCountry(e.target.value)}
              value={getCountry}
            >
              <option disabled selected hidden>
                Select Country
              </option>
              {country.map((cnt) => (
                <option
                  value={cnt.country}
                  key={`${cnt.country}-${Date.now()}`}
                >
                  {cnt.country}
                </option>
              ))}
            </select>
          )}
        </div>
        <div>
          <select>
            <option disabled selected hidden>
              Select City
            </option>
            <option value="">India</option>
          </select>
        </div>
        <button type="">Go</button>
      </div>
    </div>
  );
}

export default App;
