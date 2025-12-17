import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/Bottles/Bottles";
const bottlePromise = fetch("bottles.json").then((res) => res.json());
function App() {
  return (
    <>
      {/* 41-2 ES6 Modules, import default, relative path */}
      <h1>buy awesome water bottle</h1>
      <Suspense fallback={<h3>bottles are loading ...</h3>}>
        <Bottles bottlePromise={bottlePromise}></Bottles>
      </Suspense>
    </>
  );
}

export default App;

// 41-3 Create and Load Fake data, json generator, online api
// - for free api data like json placeholder = https://github.com/public-apis/public-apis
