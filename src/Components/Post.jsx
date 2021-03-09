import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { useStateValue } from '../ContextAPI/StateProvider';
import { db, auth } from "../Firebase/firebase";

function Post(props) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [comment2, setComment2] = useState("");
  const [{ user}] = useStateValue();


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
        username: user.person,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log(comment);
    setComment('');
}
function myID(){
  setInterval(Math.random(), 1);

}
function exit(){
  auth.signOut()
}
  return (
    <div>
        {console.log(comment2)}
      <p>{props.author}:{props.question}</p>
      <div className="post_comments">
        {typeof comments != "undefined" ?
        comments.map((comment) => (
            <div key={myID}  className="comment">
          <p className="comment1">
            <strong>{comment.username}: </strong>
            {comment.text}
          </p>
          </div>
        )):<h1>Loading...</h1>
    }
    <form className="post_commentBox">
                <input type="text" className="post_input" placeholder="Add a comment" value={comment} onChange={(e) => setComment(e.target.value)}/>

                <button disabled={!comment}  className="post_button" type="submit" onClick={postComment}>comment</button>
            </form>
      </div>
      
            <button  onClick={event=>db.collection('posts').doc(props.postId).delete()}>delete post</button>
            
      

    </div>
  );
}

export default Post;
