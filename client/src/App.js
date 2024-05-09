import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<div>Home page</div>} path="/" />
        <Route element={<Login></Login>} path="/login" />
        <Route element={<SignUp></SignUp>} path="/sign-up" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
