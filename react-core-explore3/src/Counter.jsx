import { useState } from "react";
export default function Counter() {
  const counterStyle = {
    display: "flex",
    border: "2px solid green",
    alignItems: "center",
    justifyContent: "space-between",
    width: "600px",
  };
  const [count, setCount] = useState(0);
  const handleCountincre = () => {
    const newcount = count + 1;
    setCount(newcount);
  };
  const handleCountdecre = () => {
    const newcount = count - 1;
    setCount(newcount);
  };
  const handlereset = () => {
    const newcount = 0;
    setCount(newcount);
  };
  return (
    <div>
      <h2>count: {count}</h2>
      <div style={counterStyle}>
        <button onClick={handleCountincre}>increase</button>
        <button onClick={handleCountdecre}>dcrease</button>
        <button onClick={handlereset}>reset</button>
      </div>
    </div>
  );
}
