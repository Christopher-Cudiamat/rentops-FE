import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './signIn/signIn.component';
import Signup from './signup/signup.component';
import Home from './home/home.component';

function Pages(){
    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/signIn">
                    <SignIn />
                </Route>
                <Route exact path="/signUp">
                    <Signup />
                </Route>
            </Switch>
        </div>
    )
}

export default Pages;