import React from "react";
import { Link } from "react-router-dom";

const close = () => {
  document.querySelector(".loginBackground").classList.add("hide");
};
export default function Login() {
  return (
    <div class="loginBackground hide">
      <div class="loginForeground">
        <div class="loginDiv">
          <h1>Log-in Please</h1>
          <input type="text" placeholder="User name" />
          <br />
          <input type="password" placeholder="Password" />
          <br />
          <input type="submit" value="submit" />
          <br />
          <Link onClick={close} to="newRegister">
            New User ? Create Account
          </Link>
        </div>
        <span onClick={close} id="closeLogin" class="material-symbols-outlined">
          close
        </span>
      </div>
    </div>
  );
}
