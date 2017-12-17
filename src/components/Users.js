import React from 'react'
import '../styles/Users.css'

export default class Users extends React.Component{

    constructor(){
        super()

        this.state = {
            lastSorted: '',
            usersList: [
                {
                    name: 'Andrew Garvin',
                    position: 'Manager, Development',
                    status: 'Active',
                    supervisor: '',
                    teams: ['Development', 'Manager', 'Admin']
                },
                {
                    name: 'Brennon Schow',
                    position: 'Developer, Back End',
                    status: 'Active',
                    supervisor: 'Andrew',
                    teams: ['Development']
                },
                {
                    name: 'Alan Miller',
                    position: 'High Judge',
                    status: 'Inactive',
                    supervisor: '',
                    teams: ['Law', 'Styling']
                },
                {
                    name: 'Emily Keator',
                    position: 'Styling Guru',
                    status: 'Active',
                    supervisor: '',
                    teams: ['Styling', 'Development']
                },
                {
                    name: 'Andrew Garvin',
                    position: 'Manager, Development',
                    status: 'Active',
                    supervisor: '',
                    teams: ['Development', 'Manager', 'Admin']
                },
                {
                    name: 'Brennon Schow',
                    position: 'Developer, Back End',
                    status: 'Active',
                    supervisor: 'Andrew',
                    teams: ['Development']
                },
                {
                    name: 'Alan Miller',
                    position: 'High Judge',
                    status: 'Inactive',
                    supervisor: '',
                    teams: ['Law', 'Styling']
                },
                {
                    name: 'Emily Keator',
                    position: 'Styling Guru',
                    status: 'Active',
                    supervisor: '',
                    teams: ['Styling', 'Development']
                },
                {
                    name: 'Andrew Garvin',
                    position: 'Manager, Development',
                    status: 'Active',
                    supervisor: '',
                    teams: ['Development', 'Manager', 'Admin']
                },
                {
                    name: 'Brennon Schow',
                    position: 'Developer, Back End',
                    status: 'Active',
                    supervisor: 'Andrew',
                    teams: ['Development']
                }
            ]
        }
        this.sortUsers = this.sortUsers.bind(this)
    }

    componentWillMount(){
        document.title = "Team Manager | Users"
    }

    sortUsers(type){
        let flag = this.state.lastSorted
        this.setState(_=>{
            let willSort = this.state.usersList
            if (flag === type) {
                willSort = willSort.sort((a,b)=> {
                    if (a[type] < b[type]) return 1
                    else if (a[type] > b[type]) return -1
                    return 0
                })
            } else {
                willSort = willSort.sort((a,b)=> {
                    if (a[type] < b[type]) return -1
                    else if (a[type] > b[type]) return 1
                    return 0
                })
            }
            return {
                usersList: willSort,
                lastSorted: !flag ? type : undefined
            }
        })
    }

    render(){

        let showUsersList = this.state.usersList.map((e,i,a)=>{
            let listTeams = ''
            e.teams.forEach((el,ind,ar)=> ind === 0 ? listTeams += el : listTeams += ', ' + el)
            return (
                <div className="users_table_row">
                    <h2 className="users_table_cell">{e.name}</h2>
                    <h2 className="users_table_cell">{e.position}</h2>
                    <h2 className="users_table_cell">{e.status}</h2>
                    <h2 className="users_table_cell">{e.supervisor || 'N/A'}</h2>
                    <h2 className="users_table_cell">{listTeams}</h2>
                </div>
            )
        })

        return (
            <div className="Users">

                <div className="users_table">
                    <div className="filters">
                        <h2 className="grid_column" onClick={_=>this.sortUsers('name')}>Full Name</h2>
                        <h2 className="grid_column" onClick={_=>this.sortUsers('position')}>Position</h2>
                        <h2 className="grid_column" onClick={_=>this.sortUsers('status')}>Status</h2>
                        <h2 className="grid_column" onClick={_=>this.sortUsers('supervisor')}>Supervisor</h2>
                        <h2 className="grid_column" onClick={_=>this.sortUsers('teams')}>Teams</h2>
                    </div>

                    <div className="table_body">
                        {showUsersList}
                    </div>

                </div>
            </div>
        )
    }
}