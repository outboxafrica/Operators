import React, {  useEffect, useState } from 'react'
import firebase from "firebase";
import { useStateValue } from '../../ContextAPI/StateProvider';

import {Inputs} from '../../Components/Inputs';
import Button from '../../Components/Buttton'
import { db } from '../../Firebase/firebase';
import {useHistory} from  "react-router-dom";

import ProfileNavBar from '../../Components/ProfileNavBar';
import Footer from '../../Components/Footer';
import "./PostPage.css"


function PostPage() {
  const [apost, setApost] = useState("");
  const [person, setperson] = useState("");
  const [{ user}] = useStateValue();
  const history =useHistory();
  
useEffect(() => {
  if(typeof user != "undefined"){
    setperson(user)
    console.log(user);
  }  
}, [user])
function postApost(event) {
  event.preventDefault();
  db.collection("posts").add({
    question:apost,
    author:person.person,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
  setApost('');
  history.push('/profileHome')
}

    return (
        <div className="display">
          <ProfileNavBar/>
          <div className="content height">
          <h3>Posts</h3>
        <form >
        
          <Inputs
          label="Make a post"
          id="outlined-size-normal"
          variant="outlined"
          placeholder='Enter a paost...'
          value={apost}
          onChange={event => setApost(event.target.value)}
          />
          {!apost?"":<Button
          variant="contained"
          color="primary"
          text="Post"
          onClick={postApost}
          />}
          
          </form>
          </div>
          <Footer/>
        </div>
    )
}

export default PostPage
