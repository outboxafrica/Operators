import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../ContextAPI/StateProvider';
import {Link} from "react-router-dom";
import Post from '../../Components/Post'
import { db, auth  } from '../../Firebase/firebase';
import {useHistory} from  "react-router-dom";


function ProfileHomePage() {
    const [posts, setPosts] = useState();
    const [{ user}] = useStateValue();

    const history =useHistory();

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
       
        function exit(){
          auth.signOut()
          history.push('/generalHome')
        }

    return (
        <div>


      <button onClick={exit}>Logout</button>
      <button onClick={()=>history.push('/post')}>Post</button>
    

            <h1>all questions</h1>
            {console.log(posts)}
            <h5>{user.person}</h5>
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

      {/* <h5>{user.person}</h5>
            {typeof posts != "undefined" ?
            [...posts].filter((post) => post.author === user.person)
            .map(({id, post}) =>(
             <Post
             key={id}
             postId={id}
             question={post.question}
             author={post.author}
             /> 
        )) : ''
      } */}
        </div>
    )
}

export default ProfileHomePage
