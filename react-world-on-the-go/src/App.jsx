import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const countriespromise = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>nadir on the go...</h3>}>
        <Countries countriespromise={countriespromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
