import React from "react";

export default function Register() {
  return (
    <div class="register">
      <h1>New User</h1>

      <label for="">Full Name:</label>
      <br />
      <input type="text" />
      <br />
      <label for="">Email:</label>
      <br />
      <input type="email" />
      <br />
      <label for="">User Name:</label>
      <br />
      <input type="text" />
      <br />
      <label for="">Password:</label>
      <br />
      <input type="text" />
      <br />
      <label for="">Confirm Password:</label>
      <br />
      <input type="password" />
      <br />
      <button>Sign Up</button>
    </div>
  );
}
