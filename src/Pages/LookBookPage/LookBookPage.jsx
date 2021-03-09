import React, { useEffect, useState } from 'react';
import {db, auth} from '../../Firebase/firebase';
import ProfileNavBar from '../../Components/ProfileNavBar';

function LookBookPage() {
    const[appUsers,setAppUsers] = useState([]);
    useEffect(()=>{
        db.collection('AppUsers').orderBy('timestamp','desc').onSnapshot(snapshot =>{
          //it listens for any new post added
          setAppUsers(snapshot.docs.map(doc => ({
            id:doc.id,
            post:doc.data()
           })));
        })
       },[]);

    return (
        <div className="display">
            <ProfileNavBar/>
            <h1>lookbook</h1>
            {
        appUsers.map(({id, post}) =>(
          <div key={id} postId={id} className="">
              <p>{post.name}</p>
              <p>{post.email}</p>
              <p>{post.facilitator}</p>
              <p>{post.student}</p>
              <img src={post.imageUrl} alt=""/>
          </div>
        ))
      }
        </div>
    )
}

export default LookBookPage
