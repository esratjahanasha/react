import React from "react";
import "./Bottle.css";
const Bottle = ({ bottle, handleaddtocart }) => {
  const { img, name, price, stock } = bottle;
  return (
    <div className="card">
      <img src={img} alt="" className="img" />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>available:{stock}</p>
      <button onClick={() => handleaddtocart(bottle)}>buy now</button>
    </div>
  );
};

export default Bottle;
