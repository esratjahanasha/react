import { use } from "react";
import Friend from "./Frnd";
export default function Friends({ frndspromise }) {
  const frnds = use(frndspromise);
  return (
    <div className="usercard">
      <h3>friends:{frnds.length}</h3>
      {frnds.map((frnd) => {
        <Friend key={frnd.id} frnd={frnd}></Friend>
      })}
    </div>
  );
}
