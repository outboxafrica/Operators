import React, { useEffect, useState } from 'react'
import {Inputs} from '../../Components/Inputs';
import Button from '../../Components/Buttton'
// import { db } from '../../Firebase/firebase';

function PostPage() {
  // const [posts, setPosts] = useState();


  //   function postComment(event) {
  //     event.preventDefault();
  //     db.collection("posts").doc(postId).collection("comments").add({
  //         text:comment,
  //         username: user.displayName,
  //         timestamp: firebase.firestore.FieldValue.serverTimestamp()
  //     });
  //     setComment('');
  // }

    return (
        <div>
        <form  noValidate autoComplete="off">

          <Inputs
          id="outlined-size-normal"
          defaultValue="question"
          variant="outlined"
          />
          <Button
          variant="contained"
          color="primary"
          text="Post"
          />
          </form>
        </div>
    )
}

export default PostPage
