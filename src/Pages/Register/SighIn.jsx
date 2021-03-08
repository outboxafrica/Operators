import React, {useEffect, useState} from "react";
import { db, auth } from "../../Firebase/firebase";
import {useHistory} from  "react-router-dom";
import "./Register.css";
import { Button, Input } from '@material-ui/core';



export default function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[user, setUser] = useState(null);
    const[openSignIn, setOpenSignIn] = useState(null)
    const history =useHistory();



    // useEffect(()=>{
    //     const unsubscribe = auth.onAuthStateChanged((authUser)=>{
    //         if(authUser){
    //             // User is logged into the system
    //             console.log(authUser)
    //             setUser(authUser)

    //         }else{
    //             // log out user
    //             setUser(null)
    //         }
    //     })
    //     return ()=>{
    //         unsubscribe()
    //     }
    // }, [user, name])

    
    function signIn(event){
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/profileHome');
          })
        .catch((error) => alert(error.message));
        // setOpenSignIn(false);
      }
    //   history.push('/generalHome')
    //   if(email){
    //   history.push('/profileHome')}


    return (
        <form className="auth-form">
            <h2>sign In</h2>
            
            <label>Email</label>
            <Input type="text" value={email} placeholder="Your email" onChange={(e)=>setEmail(e.target.value)} />
            
            <label>Password</label>
            <Input type="text" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />

            {!user? (
                 <Button type="submit" onClick={signIn}>Sign In</Button>
            ):(
               <p>{email}</p>
            )}
            {/* {!openSignIn? <h5>you are signed in</h5>:<h5>you are Not signed in</h5>} */}
            
        </form>
    )
}