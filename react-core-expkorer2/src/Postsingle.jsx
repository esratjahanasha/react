export default function Postsingle({ post }) {
    const {title,body,userId}=post
  return (
    <div className="usercard">
       <h4>{title}</h4>
      <p>{body}</p> 
      <p>{userId}</p>
    </div>
  );
}
