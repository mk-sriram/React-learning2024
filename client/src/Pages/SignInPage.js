// src/components/SignInPage.js

import React, { useEffect } from "react";
import "./SignInPage.css";

const SignInPage = () => {
  useEffect(() => {
    /* global google */
    window.onload = function () {
      google.accounts.id.initialize({
        client_id: "YOUR_GOOGLE_CLIENT_ID",
        callback: handleSignInWithGoogle,
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        {
          type: "standard",
          shape: "pill",
          theme: "outline",
          text: "signin_with",
          size: "large",
          logo_alignment: "left",
        } // customization attributes
      );
    };
  }, []);

  const handleSignInWithGoogle = (response) => {
    console.log(response);
    console.log("Handle sign in with google works");
    // Handle sign-in response
  };

  return (
    <div className="signin-container">
      <header className="header">PARSYLL</header>
      <div className="signin-content">
        <h3>WELCOME TO PARSYLL</h3>
        <h1>Syllabus To Calendar Made Easy</h1>
        <div id="buttonDiv"></div>
      </div>
    </div>
  );
};

export default SignInPage;
