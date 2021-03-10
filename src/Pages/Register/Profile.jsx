  
import React from 'react';
import { useStateValue } from '../../ContextAPI/StateProvider';

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