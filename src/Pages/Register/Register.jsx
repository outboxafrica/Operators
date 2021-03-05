import React, {useEffect, useState} from "react";
import { db, auth } from "../../Firebase/firebase";
import "./Register.css";
import { Button, Input } from '@material-ui/core';
import Select from '@material-ui/core/Select';



export default function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const[user, setUser] = useState(null)

    useEffect(()=>{
        const logOut = auth.onAuthStateChanged((authUser)=>{
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
            logOut()
        }
    }, [user, name])

    
    const signUp = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser)=>{
            return authUser.user.updateProfile({
                displayName: name,
                role: role
            })
        })
        .catch(error=>alert(error.message))

    }

    return (
        <form className="auth-form">
            <h2>register</h2>
            <label>Username</label>
            <Input type="text" value={name} placeholder="Username" onChange={(e)=>setName(e.target.value)} />
            
            <label>Email</label>
            <Input type="text" value={email} placeholder="Your email" onChange={(e)=>setEmail(e.target.value)} />
            
            <label>Password</label>
            <Input type="text" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
            
            <label>Role</label>
            <Select id="dropdown" value={role} onChange={(e)=> setRole(e.target.value)}>
                <option>Student</option>
                <option>Facilitator</option>
            </Select>

            {user? (
                <Button type="submit" onClick={()=>auth.signOut()}>Logout</Button>
            ):(
                <Button type="submit" onClick={signUp}>SignUp</Button>
            )}
            
            
        </form>
    )
}
