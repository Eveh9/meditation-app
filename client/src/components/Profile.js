import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Profile = ({ user }) => {
  return (
    <div>
      {user ? (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <NavLink to={"/meditation"}>Meditate now</NavLink>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Profile;
