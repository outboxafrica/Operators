  
import React, {useEffect, useState} from 'react';
import { useStateValue } from '../../ContextAPI/StateProvider';
import { db } from "../../Firebase/firebase";

export default function Profile() {

    // const [users, setUsers] = useState(null)
    const [{ user}] = useStateValue();
    const [person, setPerson] = useState()

    // useEffect(() => {
    //   var person =   user

    // }, [])
    return (
        <div>
            <p>Users</p>
            {user.person}
            {console.log(user.email)}
        </div>
    )
}