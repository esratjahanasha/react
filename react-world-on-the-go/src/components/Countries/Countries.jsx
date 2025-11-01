import React, { use } from "react";
import Country from "./Country";

const Countries = ({ countriespromise }) => {
  const countries = use(countriespromise);
  console.log(countries);
  return (
    <div>
      <p>{countries.length}</p>
      <h1>lets go....</h1>
      {countries.map((country) => (
        <Country key={country.id} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
