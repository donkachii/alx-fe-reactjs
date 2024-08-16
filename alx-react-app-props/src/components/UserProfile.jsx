import React from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const userData = React.useContext(UserContext);
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{userData.name}</h2>
      <p>
        Email: <span style={{ fontWeight: "bold" }}>{userData.email}</span>
      </p>
    </div>
  );
};

export default UserProfile;
