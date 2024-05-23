import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
    <Container>
      {user && (
        <div>
          <ProfileInfo>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
          </ProfileInfo>
          <LinkContainer>
            <NavLink to={"/meditation"}>Meditate now</NavLink>
          </LinkContainer>
          <Sessions>
            {sessions.map((e) => {
              const date = new Date(e.timestamp);
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              return (
                <SessionBox>
                  <h4>{`${day}-${month}-${year}`}</h4>
                  <p>{`hours:${e.session.hours}`}</p>
                  <p>{`minutes:${e.session.minutes}`}</p>
                  <p>{`seconds:${e.session.seconds}`}</p>
                </SessionBox>
              );
            })}
          </Sessions>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 16px;
`;

const ProfileInfo = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const Sessions = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

const SessionBox = styled.div`
  border-bottom: 1px solid black;
  padding: 8px;
`;

const LinkContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
`;

export default Profile;
