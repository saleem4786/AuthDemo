import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import "../style.scss";

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated]);

  return (
    <section id="entry-page">
      <form>
        <h2>Welcome to Auth0 Demo!</h2>
          <legend>To Authenticate in Demo, Press Start</legend>
          {/* <ul>
            <li>
              <label for="username">Username:</label>
              <input type="text" id="username" required />
            </li>
            <li>
              <label for="password">Password:</label>
              <input type="password" id="password" required />
            </li>
            <li>
              <i />
              <a onClick={() => {}} href="#">
                Forgot Password?
              </a>
            </li>
          </ul> */}
        <button
          type="button"
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Start
        </button>
        {/* <button type="button" onClick={() => {}}>
          Create an Account
        </button> */}
      </form>
    </section>
  );
}

export default Login;
