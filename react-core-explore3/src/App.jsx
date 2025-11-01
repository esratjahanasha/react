import "./App.css";
import Counter from "./Counter";
import ShowHide from "./ShowHide";
import FtechApi from "./FetchApi";
import { Suspense } from "react";
const fetchUsers=async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
  }
function App() {
const userspromises= fetchUsers();
  return (

    <>
      <h1>Vite + React</h1>
      <Counter></Counter>
      <ShowHide></ShowHide>
     
      <Suspense fallback={<h3>loading...</h3> }>
      <FtechApi userspromises={userspromises}></FtechApi></Suspense>
  
    </>
  );
}

export default App;
