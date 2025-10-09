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


// export default function Todo({task, isdone}){
// if(isdone){
//     return null;
// }else{
//     return <li>pending: {task}</li>
// }
// }


// export default function Todo({ task, isdone, time = 0 }) {
//   if (isdone) {
//     return (
//       <li>
//         task: {task}, duration: {time}
//       </li>
//     );
//   }
//   return (
//     <li>
//       pendinggg: {task}, duration: {time}
//     </li>
//   );
// }


//consitional redering: option-3:ternary
// export default function Todo({ task, isdone, time }) {
//   return isdone ? (
//     <li>
//       done: {task}, duration:{time}
//     </li>
//   ) : (
//     <li>pending: {task}</li>
//   );
// }


//consitional redering: option-4: && (condition true hole render hobe)
// export default function Todo({ task, isdone, time }) {
//   return isdone && <li> done: {task}, duration:{time}</li>
// }

//consitional redering: option-5: || (condition true na hole render hobe)
// export default function Todo({ task, isdone, time=0 }) {
//   return isdone || <li> pending: {task}, duration:{time}</li>
// }


// consitional redering: option-6: use variable
// export default function Todo({task, isdone,time}){
//   let listItem;const displaytime=time?time:100;
// if(isdone){
//     listItem =<li>done: {task}, duration: {displaytime}</li>;
// }else{
//   listItem= <li>pending: {task}</li>;
// }
// return listItem;
// }

export default function Todo({task, isdone,time}){
  let listItem;
if(isdone){
    listItem =<li>done: {task}, duration: {time? "t is done" : "is not done"}</li>;
}else{
  listItem= <li>pending: {task}</li>;
}
return listItem;
}