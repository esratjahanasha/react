import React, { useState } from "react";
import "./Contry.css";
const Country = ({ country, handlevisitedcountries, handlevisitedflags }) => {
  const [visited, setVsited] = useState(false);
  const handleVisited = () => {
    // setVsited(true);
    setVsited(!visited);
    handlevisitedcountries(country);
  };
  return (
    <div className={`contry ${visited && "contry-visited"}`}>
      <h3>{country.name.common}</h3>
      <img src={country.flags.png} />
      <p>independent: {country.independent ? "free" : "not free"}</p>
      <p>population: {country.population}</p>
      <button onClick={handleVisited}>
        {visited ? "visited" : "not visited"}
      </button>
      <button onClick={()=>{handlevisitedflags(country.flags.png)}}>add visited flags: </button>
    </div>
  );
};

export default Country;
