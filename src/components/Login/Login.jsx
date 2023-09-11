import React from "react";
import { MyInfo } from "../base/baseLogin";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  function SubmitHandler(e) {
    e.preventDefault();
    let [login, password] = e.target.elements;
    if (login.value === MyInfo.login && password.value === MyInfo.passwrod) {
      navigate("/home");
    } else {
      messageApi.open({
        type: "error",
        content: "Login yoki password Xato",
      });
    }
  }

  return (
    <div className="login-container">
      {contextHolder}
      <form action="" className="form" onSubmit={SubmitHandler}>
        <h1>Login In</h1>
        <input type="text" />
        <input type="text" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
