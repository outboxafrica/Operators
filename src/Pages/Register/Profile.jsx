import React, {useEffect, useState} from 'react';
import { db } from "../../Firebase/firebase";

export default function Profile() {

    const [users, setUsers] = useState(null)

    useEffect(() => {
        db.collection("users").onSnapshot(snapshot=>{
            setUsers(snapshot.docs.map(docs=>docs.data()))
        })
    }, [])
    return (
        <div>
            {users}
        </div>
    )
}
