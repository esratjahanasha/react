import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Cntries.css";

const Countries = ({ countriespromise }) => {
  const countries = use(countriespromise);
  console.log(countries);

  //Lift up the state to handle child component event
  const [visitedCountries, setVisitedCountries] = useState([]);

  //Lift up state in arrays by comparing reference
  const handlevisitedcountries = (country) => {
    const newvisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newvisitedCountries);
  };

  //Lift up state for flags and handle immutable array
  const [visitedFlags, setvisitedFlags] = useState([]);
  const handlevisitedflags = (flag) => {
    const newvisitedflags = [...visitedFlags, flag];
    setvisitedFlags(newvisitedflags);
  };

  return (
    <div>
      <p>total countries: {countries.length}</p>
      <h1>lets go....</h1>
      <h3>visited countries:{visitedCountries.length} </h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca2}>{country.name.common}</li>
        ))}
      </ol>
      <div className="visitedflags">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      <div className="cntries">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handlevisitedcountries={handlevisitedcountries}
            handlevisitedflags={handlevisitedflags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
