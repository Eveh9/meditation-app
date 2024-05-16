import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useState } from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Meditation from "./components/Meditation";

const fakeUser = {
  email: "huhu@hu.com",
  name: "wai",
};

function App() {
  const [user, setUser] = useState();
  console.log(user);

  const loginHandler = async (email, password) => {
    const body = { email, password };
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    setUser(data.user);
  };
  return (
    <BrowserRouter>
      <Routes>
        //SWITCH FAKE USER
        <Route element={<Home user={fakeUser} />} path="/" />
        <Route element={<Login loginHandler={loginHandler} />} path="/login" />
        <Route element={<Profile user={fakeUser} />} path="/profile" />
        <Route element={<SignUp />} path="/sign-up" />
        <Route element={<Meditation user={fakeUser} />} path="/meditation" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
