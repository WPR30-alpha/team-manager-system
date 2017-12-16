import React, {Component} from 'react'
import '../styles/Bubble.css'
import '../styles/TeamManager.css'
import logo from '../styles/assets/team_logo.png'

// COMPONENT IMPORTS
import Users from './Users'
import Teams from './Teams'

export default class TeamManager extends Component {
    constructor(){
        super()
        
        this.state = {
            activeFilter: 'Users'
        }
    }
    
    componentDidMount(){
        document.title = "Team Manager"
    }

    _handleFilterChange(filter){
        this.setState({
            activeFilter: filter
        })
    }

    render(){
        let {activeFilter} = this.state
        return (
            <div className="TeamManager">
                <header>
                    <div className="header_container">
                        <div className="header_text">
                            <h2 className={activeFilter === 'Users' ? 'active_header' : undefined} 
                                onClick={_=>this._handleFilterChange('Users')}>Users</h2>
                            <h2 className={activeFilter === 'Teams' ? 'active_header' : undefined} 
                                onClick={_=>this._handleFilterChange('Teams')}>Teams</h2>
                        </div>
                        <div className="header_button">
                            <button className="header_button_actual"> {activeFilter === 'Users' ?  'Add New User' : 'Create New Team'}</button>
                        </div>
                    </div>
                </header>
                <main>
                    { activeFilter === 'Users' ? <Users /> :
                    <Teams /> }
                </main>
                <footer>

                </footer>
            </div>
        )
    }
}

// This export creates a small, customizable button that will navigate to the Team Manager page.
// It accepts any combination of the optional height, width, fontSize, and hideText props. 
// The former 3 are numbers. The latter takes no value.

export function TMBubble (props){
    return (
        <div className="Bubble" style={{height: props.height + 'px', width: props.width + 'px', fontSize: props.fontSize + "px"}}>
            <img src={logo} alt="team_manage_logo" />
            {props.hideText || <h1>Team Management</h1>}
        </div>
    )
}