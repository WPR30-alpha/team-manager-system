import React, {Component} from 'react'
import landing from './Landing Page.png'
import teams from './Manage Teams.png'
import users from './Manage Users.png'

export default function Img(){
    return (
        <div>
            <img src={landing}/>
            <img src={users}/>
            <img src={teams}/>
        </div>
    )
}