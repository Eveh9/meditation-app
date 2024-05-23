import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <Container>
      <h1>Meditation App</h1>
      <LinksContainer>
        <Link to="/login">Login</Link>
        <Link to="/sign-up">Sign up</Link>
      </LinksContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Home;
