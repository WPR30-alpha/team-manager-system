import React, {Component} from 'react'
import './styles/reset.css'
import {Switch, Route} from 'react-router-dom'
import TeamManager, {TMBubble} from './components/TeamManager'

export default class App extends Component {
    render(){
        return (
            <div className="App">

                <Switch>

                    <Route path="/teammanager" component={TeamManager} />
                    

                </Switch>
                {/* <TMBubble fontSize="14" /> */}
                {/* <TeamManager /> */}
            </div>
        )
    }
}