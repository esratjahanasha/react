//how to loop through an array and show component
 import Books from "./Books"
export default function Library({books}){
return(
<div>
    <h1>my central library</h1>
    <p>book collection:{books.length}</p>
    <p>adress: </p>

    <ul>
       { books.map( book => <Books key={book.id} book={book}></Books> )}
    </ul>
</div>
);
}