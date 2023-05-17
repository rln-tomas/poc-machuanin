import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";

const normalCredentials = {
  username: "test",
  password: "test",
  isAdmin: false,
};

function validateCredentials(credentials) {
  return (
    credentials[0].value === normalCredentials.username &&
    credentials[1].value === normalCredentials.password
  );
}

const Login = () => {
  const navigate = useNavigate();

  const adminContext = useContext(Context);

  const handleSubmit = (e, values) => {
    e.preventDefault();
    if (validateCredentials(e.target)) {
      localStorage.setItem("username", e.target[0].value);
      localStorage.setItem("isAdmin", JSON.stringify(true));
      adminContext?.setIsAdmin(true);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Username" />
      <input placeholder="Password" type="password" />

      <button type="submit">LOGIN</button>
    </form>
  );
};

export default Login;
