import React from "react";
import SignUpForm from "../components/SignUpForm"

function SignUp({ setUser }) {

  return (
    <div>
      <SignUpForm onLogin={setUser}/>
    </div>
  );
}

export default SignUp;
