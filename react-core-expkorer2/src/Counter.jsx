import { useState } from "react";

export default function Counter(){
    const counterStyle={border:"2px blue solid"}
    
    const [count,setCount]=useState(0);
    const handlecount=()=>{

      const newcount=count+1;
      setCount(newcount);
    }

    return(
<div>
    <h3>count: {count}</h3>
    <button onClick={handlecount}>add</button>
</div>
    );
}