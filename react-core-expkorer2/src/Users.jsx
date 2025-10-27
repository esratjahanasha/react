// 39-6 Load dynamic data, API call using use

import { use } from "react";

export default function Users({ fetchUsers }) {
  const users =  use(fetchUsers);
  console.log(users);

  return (
    <div className="usercard">
      <h3>usersssssssss: {users.length}</h3>
    </div>
  );
}
