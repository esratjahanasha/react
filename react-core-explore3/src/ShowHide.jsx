import { useState } from "react";

export default function ShowHide() {
  const [isVisible, setVisible] = useState(false);
  const handlevisibility = () => {
    setVisible(!isVisible);
  };
  return (
    <div>
      <h1>hhhhhh</h1>
      <button onClick={handlevisibility}>
        {isVisible ? "Hide" : "Show"}Text
      </button>
      {isVisible && <p>Hello react LEArner</p>}
    </div>
  );
}
