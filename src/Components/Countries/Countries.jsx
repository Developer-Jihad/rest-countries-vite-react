import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center pt-5">
        Rest Countries Practice
      </h1>
      <br />
      <hr />
      <br />
      <div className="grid grid-cols-4 gap-3">
        {countries.map((country, index) => (
          <Country key={index} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
