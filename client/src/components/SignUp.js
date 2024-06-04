import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const SignUpHandler = async () => {
    const body = { email, name, password };
    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <Container>
      <h1>Registration</h1>
      <CustomForm
        onSubmit={async (e) => {
          e.preventDefault();
          SignUpHandler();
          navigate("/login");
        }}
      >
        <label>Name:</label>
        <CustomInput
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          required
        />

        <label>Email:</label>
        <CustomInput
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          required
        />

        <label>Password:</label>
        <CustomInput
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          required
        />

        <CustomBtn>Register</CustomBtn>
      </CustomForm>
      <CustomNavLink to={"/login"}>Click here to login</CustomNavLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fefbf3;
`;

const CustomForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 240px;
  padding: 16px;
`;

const CustomInput = styled.input`
  padding: 4px;
  width: 100%;
`;

const CustomNavLink = styled(NavLink)`
  text-decoration: none;
`;

const CustomBtn = styled.button`
  padding: 8px;
`;

export default SignUp;
