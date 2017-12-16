import React from 'react'
import '../styles/Users.css'

export default function Users (){
    document.title = "Team Manager | Users"
    return (
        <div className="Users">
            {/* <div className="filters">
                <h2>Full Name</h2>
                <h2>Position</h2>
                <h2>Status</h2>
                <h2>Supervisor</h2>
                <h2>Teams</h2>
            </div> */}
            {/* <div className="filter_table"> */}
                <table className="users_table">
                    <tr className="filters">
                        <th>Full Name</th>
                        <th>Position</th>
                        <th>Status</th>
                        <th>Supervisor</th>
                        <th>Teams</th>
                    </tr>
                    <tr className="user_row">
                        <td>Andrew</td>
                        <td>Manager, Development</td>
                        <td>Active</td>
                        <td>N/A</td>
                        <td>Admin, Managerial</td>
                    </tr>
                    <tr className="user_row" style={{background: '#ddd'}}>
                        <td>Brennon</td>
                        <td>Developer, Front End</td>
                        <td>Inactive</td>
                        <td>Andrew</td>
                        <td>None</td>
                    </tr>
                </table>
            {/* </div> */}
        </div>
    )
}