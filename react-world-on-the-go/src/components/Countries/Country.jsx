import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <p>{country.name}</p>
      <p>{country.address.geo.lat}</p>
    </div>
  );
};

export default Country;
