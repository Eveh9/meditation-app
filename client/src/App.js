import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState();
  // const navigate = useNavigate();
  const loginHandler = async (email, password) => {
    const body = { email, password };
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    setUser(data.user);
    // navigate("/login");
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home user={user}></Home>} path="/" />
        <Route
          element={<Login loginHandler={loginHandler}></Login>}
          path="/login"
        />
        <Route element={<SignUp></SignUp>} path="/sign-up" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
