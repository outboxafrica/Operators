import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../ContextAPI/StateProvider";
import { useHistory } from "react-router-dom";
function GeneralHomePage() {
  const [{ user }] = useStateValue();
  const history = useHistory();

  function loginPath(e) {
    e.preventDefault();

    history.push("/search");
  }
  function signUpPath(e) {
    e.preventDefault();

    history.push("/search");
  }

  return (
    <div>
      <h1>EDU ONLINE</h1>
      {user.person}
      {user.person === "null" || typeof user.person == "undefined" ? (
        <Link to="/sighIn">
          <button>Login</button>
        </Link>
      ) : (
        <Link to="/profileHome">
          <button>Sign In</button>
        </Link>
      )}

      {user.person === "null" || typeof user.person == "undefined" ? (
        <Link to="/register">
          <button>Sign up</button>
        </Link>
      ) : (
        <Link to="/profileHome">
          <button>Sign up</button>
        </Link>
      )}
    </div>
  );
}

export default GeneralHomePage;
