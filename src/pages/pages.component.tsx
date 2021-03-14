import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./signIn/signIn.component";
import Home from "./home/home.component";
import About from "./about/about.component";
import Contact from "./contact/contact.component";
import AddProperty from "./addProperty/addProperty.component";
import Rent from "./rent/rent.container";
import Property from "./property/property.component";
import { scrollToTop } from "../utils/scrollManager";
import { IPagesProps } from "./pages.type";
import Help from "./help/help.component";
import Signup from "./signup/signUp.component";
import Account from "./account/account.container";

const Pages: React.FC<IPagesProps> = ({ isAuthenticated, activePage }) => {
  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage]);

  return (
    <div>
      <Switch>
        {/* PUBLIC ROUTES */}
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

        <Route exact path="/property">
          <Property />
        </Route>
        <Route exact path="/help">
          <Help />
        </Route>

        {/* PRIVATE ROUTES */}

        <Route exact path="/add-property">
          {isAuthenticated ? (
            <AddProperty />
          ) : (
            <Redirect to={{ pathname: "/signIn" }} />
          )}
        </Route>

        <Route exact path="/account">
          {isAuthenticated ? (
            <Account />
          ) : (
            <Redirect to={{ pathname: "/signIn" }} />
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default Pages;
