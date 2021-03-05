import React,{useEffect} from 'react';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Post from './Pages/Post/PostPage';
import General from './Pages/GeneralHomePage/GeneralHomePage';
import ProfileHome from './Pages/ProfileHomePage/ProfileHomePage';
import LookBook from './Pages/LookBookPage/LookBookPage';
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Register/Profile";
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route exact path="/lookBook" component={LookBook}/>
      <Route exact path="/" component={General}/>
      <Route exact path="/post" component={Post}/>
      <Route exact path="/profileHome" component={ProfileHome}/>
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={Profile} />
       </Switch>
    </Router>
    </div>
  );
}

export default App;
