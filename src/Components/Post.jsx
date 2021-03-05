import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { db } from "../Firebase/firebase";

function Post(props) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (props.postId) {
      unsubscribe = db
        .collection("posts")
        .doc(props.postId)
        .collection("comments")
        // .orderBy('timestamp','desc')
        // snapshot lisener for comments
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [props.postId]);


  function postComment(event) {
    event.preventDefault();
    db.collection("posts").doc(props.postId).collection("comments").add({
        text:comment,
        // username: user.displayName,
        username: "ANONYMOU",
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log(comment);
    setComment('');
}


  return (
    <div>
      <p>{props.question}</p>
      <div className="post_comments">
        {typeof comments != "undefined" ?
        comments.map((comment) => (
          <p>
            <strong>{comment.username}: </strong>
            {comment.text}
          </p>
        )):""
    }
    <form className="post_commentBox">
                <input type="text" className="post_input" placeholder="Add a comment" value={comment} onChange={(e) => setComment(e.target.value)}/>

                <button disabled={!comment}  className="post_button" type="submit" onClick={postComment}>Post</button>
            </form>
      </div>
    </div>
  );
}

export default Post;
