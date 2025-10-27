import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";
import Library from "./Library";
function App() {
  const time = 60;
  // const actors = ["asha", "omr", "sunny", "tasin"];
  const singers = [
    { id: 1, name: "asha", age: 23 },
    { id: 2, name: "agteeeeeefda", age: 263 },
  ];

  const books = [
    { id: 1, name: "gk", price: 300 },
    { id: 2, name: "bio", price: 245 },
    { id: 3, name: "fdra", price: 5560 },
    { id: 4, name: "bangla", price: 300 },
    { id: 5, name: "eng", price: 3400 },
    { id: 6, name: "che", price: 56 },
    { id: 7, name: "math", price: 0 },
  ];
  return (
    <>
      <h1>react core concepts</h1>

      <Library books={books}></Library>

      {singers.map((singer) => (
        <Singer key={singer.id} singer={singer}></Singer>
      ))}

      {/* {actors.map((actor) =><Actor actor={actor}></Actor>
       
      )} */}

      {/* <Todo task="learn react" isdone={true} time={time}></Todo>
      <Todo task="take shower" isdone={false}></Todo>
      <Todo task="eng practice" isdone={true} time="50"></Todo>
      <Todo task="reading" isdone={true} time=""></Todo> */}
      {/* <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
      <Developer name="asha" tech="mern"></Developer>
      <Developer name="habi jabi" tech="js"></Developer>
      <Developer name="baaa" tech="react"></Developer>
      <Plyers name="sakib" runs="5000"></Plyers>
      <Plyers name="mushi" runs="507800"></Plyers>
      <Salami event="rojar eid" amount="500"></Salami>
      <Salami event="bd"></Salami> */}
    </>
  );
}

function Person() {
  const name = "asha";
  const age = 12;
  return (
    <div className="person">
      <p>name: {name}</p>
      <p>id: {age}</p>
    </div>
  );
}

function Student() {
  const name = "gh";
  const age = 67;
  const studentStyle = {
    color: "green",
    padding: "10px",
    border: "2px solid pink",
    textAlign: "right",
  };
  return (
    <p style={studentStyle}>
      {name}
      {age}
    </p>
  );
}

function Developer(props) {
  return (
    <div style={{ border: "2px blue solid", margin: "20px", padding: "30px" }}>
      <p>developer: {props.name}</p>
      <p>tech: {props.tech}</p>
    </div>
  );
}

function Plyers({ name, runs }) {
  return (
    <div className="person">
      <p>name:{name} </p>
      <p>runs: {runs}</p>
    </div>
  );
}

function Salami({ event, amount = 0 }) {
  return (
    <div className="person">
      <p>salami for: {event}</p>
      <p>amount: {amount}</p>
    </div>
  );
}
export default App;
