import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

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
    <div>
      <h1>Registration</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          SignUpHandler();
          // navigate("/login");
        }}
      >
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          required
        />

        <label>Email:</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          required
        />

        <label>Password:</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          required
        />

        <button>Register</button>
      </form>
      <NavLink to={"/login"}>Click here to login</NavLink>
    </div>
  );
};

export default SignUp;
