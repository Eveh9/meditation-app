import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const fakeData = [
  {
    email: "hehe@he.com",
    timestamp: 1715830773168,
    session: {
      hours: 3,
      minutes: 4,
      seconds: 6,
    },
  },
  {
    email: "hehe@he.com",
    timestamp: 1715830773568,
    session: {
      hours: 5,
      minutes: 5,
      seconds: 5,
    },
  },
  {
    email: "hehe@he.com",
    timestamp: 1715830774168,
    session: {
      hours: 7,
      minutes: 7,
      seconds: 7,
    },
  },
];

const Profile = ({ user }) => {
  const [sessions, setSessions] = useState([]);
  const getSessions = async () => {
    const response = await fetch(
      `http://localhost:8000/session?userEmail=${user.email}`,
      {
        method: "GET",
      }
    );
    const formattedResponse = await response.json();
    setSessions(formattedResponse.data);
  };
  useEffect(() => {
    getSessions();
  }, []);
  return (
    <div>
      {user ? (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <NavLink to={"/meditation"}>Meditate now</NavLink>
          <div>
            {sessions.map((e) => {
              const date = new Date(e.timestamp);
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              return (
                <div>
                  <h4>{`${day}-${month}-${year}`}</h4>
                  <p>{`hours:${e.session.hours}/minutes:${e.session.minutes}/seconds:${e.session.seconds} `}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Profile;
