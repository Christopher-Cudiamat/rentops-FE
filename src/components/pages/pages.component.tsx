import React from 'react';
import SignIn from './signIn/signIn.component';
import SignUp from './signUp/signUp.component';
import { Switch, Route } from 'react-router-dom';

function Pages(){
    return(
        <div>
            <Switch>
                <Route exact path="/signIn">
                    <SignIn />
                </Route>
                <Route exact path="/signUp">
                    <SignUp />
                </Route>
            </Switch>
        </div>
    )
}

export default Pages;