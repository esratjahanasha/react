export default function User({usersingle}){
   console.log(usersingle.length)

return(
<div style={{border: "2px solid green",margin: "20px"}}>
   
    <h2>{usersingle.name}</h2>
    <p>{usersingle.address.city}</p>
    <p>{usersingle.company.name}</p>
</div>
);
}