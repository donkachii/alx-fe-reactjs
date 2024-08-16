import React from "react";

const UserProfile = () => {
  const UserContext = React.useContext();
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{UserContext.name}</h2>
      <p>
        Email: <span style={{ fontWeight: "bold" }}>{UserContext.email}</span>
      </p>
    </div>
  );
};

export default UserProfile;
