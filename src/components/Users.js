import React from 'react'
import '../styles/Users.css'

export default function Users (){
    document.title = "Team Manager | Users"
    return (
        <div className="Users">
            <div className="filters">
                <h2>Full Name</h2>
                <h2>Position</h2>
                <h2>Status</h2>
                <h2>Supervisor</h2>
                <h2>Teams</h2>
            </div>
            <div className="filter_table">
                
            </div>
        </div>
    )
}