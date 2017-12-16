import React from 'react'
import '../styles/Users.css'

export default function Users (){
    document.title = "Team Manager | Users"
    return (
        <div className="Users">

            <div className="users_table">
            <div className="filters table_headers">
                <h2 className="grid_column">Full Name</h2>
                <h2 className="grid_column">Position</h2>
                <h2 className="grid_column">Status</h2>
                <h2 className="grid_column">Supervisor</h2>
                <h2 className="grid_column">Teams</h2>
            </div>

            <div className="table_body">
                <div className="users_table_row">
                    <h2 className="users_table_cell">Andrew Garvin</h2>
                    <h2 className="users_table_cell">Manager, Development</h2>
                    <h2 className="users_table_cell">Active</h2>
                    <h2 className="users_table_cell">N/A</h2>
                    <h2 className="users_table_cell">Development, Manager</h2>
                </div>

                <div className="users_table_row">
                    <h2 className="users_table_cell">Brennon Schow</h2>
                    <h2 className="users_table_cell">Developer, Front End</h2>
                    <h2 className="users_table_cell">Active</h2>
                    <h2 className="users_table_cell">Andrew</h2>
                    <h2 className="users_table_cell">Development</h2>
                </div>
            </div>

            </div>
        </div>
    )
}