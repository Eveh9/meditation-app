import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ({ loginHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await loginHandler(email, password);
          navigate("/profile");
        }}
      >
        <label>Email:</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          required
        />

        <label>Password:</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          required
        />

        <button>Login</button>
      </form>
      <NavLink to={"/sign-up"}>Register here</NavLink>
    </div>
  );
};

export default Login;
