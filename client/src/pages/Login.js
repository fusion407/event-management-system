import React from "react";
import LoginForm from "../components/LoginForm"

function Login({ setUser }) {

  return (
    <div>
      <LoginForm onLogin={setUser}/>
    </div>
  );
}

export default Login;
