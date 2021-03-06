import React, { useEffect, useState } from 'react'
import firebase from "firebase";
import {Inputs} from '../../Components/Inputs';
import Button from '../../Components/Buttton'
import { db } from '../../Firebase/firebase';

function PostPage() {
  const [apost, setApost] = useState("");

function postApost(event) {
  event.preventDefault();
  db.collection("posts").add({
    question:apost,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
  setApost('');
  console.log(apost);
  setApost("");
}

    return (
        <div>
        <form  noValidate autoComplete="off" onSubmit={postApost}>

          <Inputs
          id="outlined-size-normal"
          variant="outlined"
          placeholder='Enter a paost...'
          value={apost}
          onChange={event => setApost(event.target.value)}
          />
          <Button
          variant="contained"
          color="primary"
          text="Post"
          onClick={postApost}
          />
          </form>
        </div>
    )
}

export default PostPage
