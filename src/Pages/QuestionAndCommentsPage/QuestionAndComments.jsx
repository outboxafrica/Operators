import React, { useEffect, useState } from 'react'
import PostBody from '../../Components/postBody'

import { db } from '../../Firebase/firebase';
function QuestionAndComments() {
    const [postBody, setPostBody] = useState("");

    useEffect(()=>{
        db.collection('posts')
        // .orderBy('timestamp','desc')
        .onSnapshot(snapshot =>{
            setPostBody(snapshot.docs.map(doc => ({
            id:doc.id,
            post:doc.data(),
            // comment2:doc.data(),
           })));
          })
        },[]);

    return (
        <div className="QuestionAndComments">
            {/* <h1>all questions</h1> */}
            {console.log(postBody)}
            {typeof posts != "undefined" ?
            postBody.map(({id, postBody}) =>(
             <PostBody
             key={id}
             postId={id}
             questionBody={postBody.questionBody}
             /> 
        )) : ''
      }
        </div>
    )
}

export default QuestionAndComments
