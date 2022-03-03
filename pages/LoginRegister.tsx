import React, { useState } from "react";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

function LoginRegister() {
  const [isLogin, setIslogin] = useState(true);
  console.log(isLogin);

  function ChangeState() {
    setIslogin(!isLogin);
  }

  return (
    <div>{isLogin ? <Login changeState={ChangeState} /> : <Register />}</div>
  );
}

export default LoginRegister;
