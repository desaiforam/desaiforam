import React from "react"
import { auth, database }  from '../../handlers/Firebase'
export default function Dashboard() {
    const user = auth.currentUser
    const refUserInformation = database.ref('UserInformation/')
    refUserInformation.on('value', function(data){
        console.log(data.val())
    })
    return (
        <div className="page-dashboard">
            <div className="max-text">
                <p>user-id: {user.uid}</p>
                <p>Name: </p>
            </div>
        </div>
    )
}