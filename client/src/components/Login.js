import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ loginHandler }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler(email, password);
          // navigate("/login");
        }}
      >
        <label for="email">Email:</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          required
        />

        <label for="password">Password:</label>
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
    </div>
  );
};

export default Login;
