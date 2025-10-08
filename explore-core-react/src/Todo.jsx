// export default function Todo({task,isdone}) {
//   return <li>task: {task} </li>;
// }

// export default function Todo({task, isdone}){
// if(isdone){
//     return <li>task: {task}</li>
// }else{
//     return <li>pending: {task}</li>
// }
// }

export default function Todo({ task, isdone, time = 0 }) {
  if (isdone) {
    return (
      <li>
        task: {task}, duration: {time}
      </li>
    );
  }
  return (
    <li>
      pendinggg: {task}, duration: {time}
    </li>
  );
}
