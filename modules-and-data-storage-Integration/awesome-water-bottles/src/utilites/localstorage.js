// 41-6 [optional] Introduction to Local Storage: Storing Data in the Browser
// 1. to get something from localstorage ,you will get it as a String
// 2. convert this to js object/Array

const getCartFromLocalStorage = () => {
  const storedcartstring = localStorage.getItem("cart");

  if (storedcartstring) {
    const storedcart = JSON.parse(storedcartstring);
    return storedcart;
  }
  return [];
};

// const additemtocartlocalstorage=id=>{
//     const cart=getCartFromLocalStorage();
//     cart.push(id);
// }

// or:
const additemtocartlocalstorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newcart = [...cart, id];
  savecarttolocalstorage(newcart);
};
const savecarttolocalstorage = (cart) => {
  const cartstringified = JSON.stringify(cart);
  localStorage.setItem(cartstringified);
};
export { additemtocartlocalstorage, getCartFromLocalStorage };
