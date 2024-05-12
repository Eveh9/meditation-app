import { useEffect } from "react";

const Profile = ({ user }) => {
  console.log("user", user);
  return (
    <div>
      {user ? (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Profile;
