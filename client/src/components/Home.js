import styled from "styled-components";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";

const Home = ({ user }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={img18}></img>
      </ImageContainer>
      <ContentContainer>
        <h1>RESPIRA</h1>
        <LinksContainer>
          <Link to="/login">Login</Link>
          <Link to="/sign-up">Sign up</Link>
        </LinksContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #fefbf3;
  gap: 350px;
  padding: 0 128px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  height: 100%;
  max-width: 30%;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 50px;
  color: green;
`;

export default Home;
