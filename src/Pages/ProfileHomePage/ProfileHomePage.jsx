import React, { useEffect, useState } from 'react'
import { db } from '../../Firebase/firebase';

function ProfileHomePage() {
    const [posts, setPosts] = useState();

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot =>{
          setPosts(snapshot.docs.map(doc => ({
            id:doc.id,
            post:doc.data()
           })));
        })
       },[]);
    return (
        <div>
            <h1>all questions</h1>
            {console.log(posts)}
            {/* {
        posts.map(({id, post}) =>(
          <p key={id}
           >{post.question}</p>
        ))
      } */}
        </div>
    )
}

export default ProfileHomePage
