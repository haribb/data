import React from "react";
import loginImg from "../images/loginimg.jpg"

const Login = () => {
  return (
    <section className="loginPage">
        <div className="logImg">
            <img src={loginImg} alt="" />
        </div>
      <div className="login">
        <h1>LOGIN</h1>
        <div className="userlog">
          <input type="text"  placeholder="Username"/>
        </div>
        <div className="passlog">
          <input type="text"  placeholder="Password"/>
        </div>
        <button>Sumbit</button>
      </div>
    </section>
  );
};

export default Login;
