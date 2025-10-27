import { Suspense } from "react";
import "./App.css";
import Counter from "./Counter";
import Users from "./Users";
// import Friends from "./Friends";
import Posts from "./Posts";

// 39-6 Load dynamic data, API call using use
// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

const fetchposts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

//39-2 Different ways to handle events in React

function App() {
  // function handleClick() {
  //   alert("i am clicked");
  // }
  // const handleClick2 = () => {
  //   alert("i am clicked2");
  // };

  // const handleClick4 = (n) => {
  //   const nn = n + 5;
  //   alert(nn);
  // };

  // 39-3 A simple Introduction to State change in React

  // const frndspromise = fetchFriends();
  const postspromise = fetchposts();
  return (
    <>
      <h3>Vite + React</h3>
      {/* // 39-3 A simple Introduction to State change in React */}
      <Counter></Counter>

      {/* <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me2</button>
      <button
        onClick={() => {
          alert("i am clicked3");
        }}
      >
        click me3
      </button>
      <button
        onClick={() => {
          handleClick4(7);
        }}
      >
        click me4
      </button> */}

      {/* 39-6 Load dynamic data, API call using use */}
      {/* <Suspense fallback={<h3>loading...........</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>friends are coming...</h3>}>
        <Friends frndspromise={frndspromise}></Friends>
      </Suspense> */}
      <Suspense fallback={<h3>posts coming...</h3>}>
        <Posts postspromise={postspromise}></Posts>
      </Suspense>
    </>
  );
}

export default App;
