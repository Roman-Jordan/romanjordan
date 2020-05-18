import React from 'react'
import {Switch,Route} from 'react-router-dom'
import RegisterForm from './forms/RegisterForm'
import LoginForm from './forms/LoginForm'
const Body = props =>{
    return(
        <>
        <p>I am a Public body</p>
        <Switch>
            <Route exact path="/register" render={()=><RegisterForm {...props}/>} />
            <Route exact path="/sign-in" render={()=><LoginForm {...props} />} />
        </Switch>
        </>
    )
}

export default Body