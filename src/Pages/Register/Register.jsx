import React, { useEffect, useState } from "react";
import { db, auth } from "../../Firebase/firebase";
import firebase from "firebase";

import "./Register.css";
import { Button, Input } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import Select from "@material-ui/core/Select";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [student, setStudent] = useState("");
  const [facilitator, setFacilitator] = useState("");

  const [user, setUser] = useState(null);
  const history = useHistory();

  // const[openSignIn, setOpenSignIn] = useState(null);

  useEffect(() => {
    const logOut = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged into the system
        console.log("AUTH_REGISTER " + authUser);
        setUser(authUser);
        // setName("")
        // setEmail("")
        // setPassword("")
      } else {
        // log out user
        setUser(null);
      }
    });
    return () => {
      logOut();
    };
  }, [user, name]);

  const signUp = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
      return authUser.user.updateProfile({
        displayName: name,
      });
    });
    db.collection("AppUsers")
      .add({
        name: name,
        email: email,
        facilitator: facilitator,
        student: student,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .catch((error) => alert(error.message));
  };
  if (user) {
    window.location.reload();
    history.push("/sighIn");
  }

  return (
    <form className="auth-form">
      <h2>register</h2>
      <label>Username</label>
      <Input
        type="text"
        value={name}
        placeholder="Username"
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <Input
        type="text"
        value={email}
        placeholder="Your email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <Input
        type="text"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <label>Role</label>

      <input
        type="radio"
        value="Student"
        onClick={(e) => setStudent(e.target.value)}
      />
      <label>Student</label>
      <br />
      <input
        type="radio"
        value="Facilitator"
        onClick={(e) => setFacilitator(e.target.value)}
      />
      <label>Facilitator</label>
      <br />

      {user ? (
        <Button type="submit" onClick={() => auth.signOut()}>
          Logout
        </Button>
      ) : (
        <Button type="submit" onClick={signUp}>
          SignUp
        </Button>
      )}
    </form>
  );
}
