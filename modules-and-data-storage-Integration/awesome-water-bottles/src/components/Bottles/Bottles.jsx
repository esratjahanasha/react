import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlePromise }) => {
  const bottleslist = use(bottlePromise);
  console.log("dd", bottleslist);
  const [cart, setCart] = useState([]);
  const handleaddtocart = (bottle) => {
    const newcart = [...cart, bottle];
    setCart(newcart);
  };
  return (
    <div>
      <p>added to cart:{cart.length}</p>
      <div className="bottles-container">
        {bottleslist.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleaddtocart={handleaddtocart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
