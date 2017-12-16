import React, {Component} from 'react'
import './styles/reset.css'
import {Switch, Route} from 'react-router-dom'

import TeamManager, {TMBubble} from './components/TeamManager'
import Img from './styles/assets/Prototypes/Img' // Can be eventually removed. Just used for development

export default class App extends Component {
    render(){
        return (
            <div className="App">

                <Switch>

                    <Route path="/teammanager" component={TeamManager} />
                    <Route path="/refs" component={Img} /> {/* This component is going to be removed. It is simply for reference to the wireframe */}

                </Switch>
                {/* <TMBubble fontSize="14"/>  */}
                {/* <TeamManager /> */}
            </div>
        )
    }
}