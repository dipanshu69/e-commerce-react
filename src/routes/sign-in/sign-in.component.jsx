import React from "react";
import SignUp from "../../Component/sign-up/sign-up.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1> hie i am Sign in</h1>
      <button onClick={logGoogleUser}>Sign With Google</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
