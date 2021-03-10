import React, { useEffect, useState } from "react";
import {  auth } from "../../Firebase/firebase";
import { useHistory } from "react-router-dom";
import "./Register.css";
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';




export default function Login() {
    const [name] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const[user, setUser] = useState(null);
    const[ openSignIn,setOpenSignIn] = useState(null)
    const history =useHistory();



    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                // User is logged into the system
                console.log(authUser)
                setUser(authUser)

            }else{
                // log out user
                setUser(null)
            }
        })
        return ()=>{
            unsubscribe()
        }
    }, [user, name])

    
    function signIn(event){
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message));
        setOpenSignIn(false);
      }
    //   history.push('/generalHome')
      if(user){
      history.push('/profileHome')}


    return (
        <Container maxWidth="sm">
            <div className="regis">
            <div className="register">
                <h2>EDU ONLINE</h2>
                <p>Sign In</p>
            </div>
        <form className="auth-form">
            
            
            <label className="reg-title">Email</label>
            <TextField id="outlined-basic" label="Your email" type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} variant="outlined" />
            
            <label className="reg-title password">Password</label>
            <TextField id="outlined-password-input" value={password} label="Password" type="password" onChange={(e)=>setPassword(e.target.value)} variant="outlined"/>
            {!user? (
                 
                 <div className="signinbutton"><Button variant="outlined" color="primary"type="submit" onClick={signIn} href="#outlined-buttons" >Sign In</Button></div>
            ):(
               <p>{email}</p>
            )}
           
            
        </form>
        </div>
        </Container>
    )
}
