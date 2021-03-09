import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../ContextAPI/StateProvider';
import {Link} from "react-router-dom";
import Post from '../../Components/Post'
import { db, auth  } from '../../Firebase/firebase';
import {useHistory} from  "react-router-dom";
import ProfileNavBar from '../../Components/ProfileNavBar';

import './ProfileHomePage.css'

function ProfileHomePage(props) {
    const [posts, setPosts] = useState();
    const [{ user}] = useStateValue();

    const history =useHistory();

    useEffect(()=>{
        db.collection('posts')
        .orderBy('timestamp','desc')
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
        <div className="display">
          <ProfileNavBar 
          profile={user.person}/>
<div className="content">
      <h3>All Posts</h3>
            {console.log(posts)}
            {typeof posts != "undefined" ?
            posts.map(({id, post}) =>(
             <Post
             key={id}
             postId={id}
             question={post.question}
             author={post.author}
             /> 
        )) : ''
      }
</div>
        
        </div>

    
    )
}

export default ProfileHomePage
