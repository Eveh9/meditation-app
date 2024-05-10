import { useEffect } from "react";
import { redirect } from "react-router-dom";

const Home = ({ user }) => {
  useEffect(() => {
    if (!user) {
      redirect("/login");
    }
  }, [user]);
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

export default Home;
