import { use } from "react";
import User from "./User";

export default function FtechApi({userspromises}){
   const userslists =use(userspromises);
return(
    <div>
{userslists.map( usersingle =><User key={usersingle.id} usersingle={usersingle}></User> )}
</div>
)
}