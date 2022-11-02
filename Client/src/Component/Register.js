import React from "react";
import reglogo from "../images/registerimg.jpg"
const Register = () => {
  return (
    <section className="RegisterPage">
      <div className="Register">
        <h1>Register</h1>
        <div className="userReg">
          <input type="text" placeholder="Username" />
        </div>
        <div className="emailReg">
          <input type="text" placeholder="Email" />
        </div>
        <div className="mobileReg">
          <input type="text"  placeholder="Mobile"/>
        </div>
            <div className="passReg">
            <input type="text"  placeholder="Password"/>
            </div>
            <div className="cpassReg">
            <input type="text"  placeholder="Confirm Password"/>
            </div>
        <button>Register</button>
      </div>
      <div className="regImg">
        <img src={reglogo} alt="no img" />
      </div>
    </section>
  );
};

export default Register;
