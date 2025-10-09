import "./App.css";

export default function Singer({ singer }) {
  return (
    <div className="singer">
      <li>name:{singer.name}</li>
      <li>age:{singer.age}</li>
    </div>
  );
}
