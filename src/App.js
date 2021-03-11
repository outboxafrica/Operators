import React, {  useEffect } from "react";
import { auth } from "./Firebase/firebase";
import { useStateValue } from "./ContextAPI/StateProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Register/Profile";
import SighIn from "./Pages/Register/SighIn";
import Post from "./Pages/Post/PostPage";
import General from "./Pages/GeneralHomePage/GeneralHomePage";
import ProfileHome from "./Pages/ProfileHomePage/ProfileHomePage";
import QuestionAndComments from "./Pages/QuestionAndCommentsPage/QuestionAndComments";
import LookBook from "./Pages/LookBookPage/LookBookPage";
import EditProfile from "./Pages/EditProfile/EditProfile";

import "./App.css";
function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("AUTH-USER-app.js" + authUser);
        dispatch({
          type: "SET_USER",
          user: {
            person: authUser.displayName,
            email: authUser.email,
          },
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  console.log("User is >>>>", user);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={General} />

          <Route exact path="/profile" component={Profile} />
          <Route exact path="/sighIn" component={SighIn} />
          <Route exact path="/register" component={Register} />

          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/lookBook" component={LookBook} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/QuestionAndComments" component={QuestionAndComments}/>
          <Route exact path="/profileHome" component={ProfileHome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
