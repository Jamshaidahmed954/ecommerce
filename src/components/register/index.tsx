import React from "react";

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
