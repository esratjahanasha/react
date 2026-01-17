import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  addtocart,
  getstoredcart,
  removefromls,
} from "../../utilites/localstorage";
import Cart from "../Cart/Cart";

const Bottles = ({ bottlePromise }) => {
  const [cart, setCart] = useState([]);
  const bottleslist = use(bottlePromise);
  console.log("dd", bottleslist);

  useEffect(() => {
    const storedcartids = getstoredcart();
    // console.log(storedcartids, bottleslist);
    const storedcart = [];
    for (const id of storedcartids) {
      const cartbottle = bottleslist.find((bottle) => bottle.id === id);
      if (cartbottle) {
        storedcart.push(cartbottle);
      }
    }
    setCart(storedcart);
  }, [bottleslist]);

  const handleaddtocart = (bottle) => {
    const newcart = [...cart, bottle];
    setCart(newcart);
    //41-7 [optional] use effect dependency and load stored id
    //save the bottole id in the storage
    addtocart(bottle.id);
  };
  const handleremovefromcart = (id) => {
    const remainingcart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingcart);
    removefromls(id);
  };
  return (
    <div>
      <p>added to cart:{cart.length}</p>
      <Cart cart={cart} handleremovefromcart={handleremovefromcart}></Cart>
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
