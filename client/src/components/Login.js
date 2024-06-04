import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";

const Login = ({ loginHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Login</h1>
      <CustomForm
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await loginHandler(email, password);
          if (response.status === 200) {
            navigate("/profile");
          } else {
            setError(true);
          }
        }}
      >
        <label>Email:</label>
        <CustomInput
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          required
        />

        <label>Password:</label>
        <CustomInput
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          required
        />

        <CustomBtn>Login</CustomBtn>
      </CustomForm>
      <CustomNavLink to={"/sign-up"}>Register here</CustomNavLink>
      {error === true && <ErrorMessage>Unable to authenticate</ErrorMessage>}
    </Container>
  );
};
const ErrorMessage = styled.p`
  color: red;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fefbf3;
  height: 100vh;
`;

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 240px;
  padding: 16px;
  background-color: #fefbf3;
`;

const CustomInput = styled.input`
  padding: 4px;
  width: 100%;
  background-color: #fefbf3;
`;

const CustomNavLink = styled(NavLink)`
  text-decoration: none;
`;

const CustomBtn = styled.button`
  padding: 8px;
`;

export default Login;
