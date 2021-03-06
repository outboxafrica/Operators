import React, { useEffect, useState } from 'react'
import Post from '../../Components/Post'
import { db } from '../../Firebase/firebase';

function ProfileHomePage() {
    const [posts, setPosts] = useState();

    useEffect(()=>{
        db.collection('posts')
        // .orderBy('timestamp','desc')
        .onSnapshot(snapshot =>{
          setPosts(snapshot.docs.map(doc => ({
            id:doc.id,
            post:doc.data(),
            // comment2:doc.data(),
           })));
          })
        },[]);
        // console.log(posts);
    return (
        <div>
            {/* <h1>all questions</h1> */}
            {console.log(posts)}
            {typeof posts != "undefined" ?
            posts.map(({id, post}) =>(
             <Post
             key={id}
             postId={id}
             question={post.question}
             /> 
        )) : ''
      }
        </div>
    )
}

export default ProfileHomePage
