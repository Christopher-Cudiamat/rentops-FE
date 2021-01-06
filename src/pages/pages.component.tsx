import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './signIn/signIn.component';
import Signup from './signup/signup.component';
import Home from './home/home.component';
import About from './about/about.component';
import Contact from './contact/contact.component';
import Listings from './listings/listings.container';
import AddProperty from './addProperty/addProperty.component';
import Rent from './rent/rent.container';

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
                <Route exact path="/rent">
                    <Rent />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/my-listings">
                    <Listings />
                </Route>
                <Route exact path="/add-property">
                    <AddProperty />
                </Route>
            </Switch>
        </div>
    )
}

export default Pages;