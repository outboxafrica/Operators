  
import React, {useEffect, useState} from 'react';
import { useStateValue } from '../../ContextAPI/StateProvider';
import { db } from "../../Firebase/firebase";

export default function Profile() {

    const [{ user}] = useStateValue();

    return (
        <div>
            <p>Users</p>
            {user.person}
            {console.log(user.email)}
        </div>
    )
}