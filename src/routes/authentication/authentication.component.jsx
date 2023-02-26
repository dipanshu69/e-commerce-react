import React from "react";
import SignUp from "../../Component/sign-up/sign-up.component";
import SignIn from "../../Component/sign-in/sign-in.component";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
