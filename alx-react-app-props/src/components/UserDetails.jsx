import React from "react";

function UserDetails() {
  const UserContext = React.useContext();
  return (
    <div>
      <p>Name: {UserContext.name}</p>
      <p>Email: {UserContext.email}</p>
    </div>
  );
}

export default UserDetails;
