import React from "react";

const UserProfile = () => {
  const userData = React.useContext();
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
