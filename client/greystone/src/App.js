import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import home from "./components/home"
import Navbar from "./components/navbar"
import contact from "./components/contact"
import reviews from "./components/reviews"
import Navbar from "./components/navbar"
import Signup from "./components/signup"

class App extends Component() {
    render() {
    return (
        <Router>
          <div>
          <Navbar/>
            <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/navbar" component={Navbar} />
                <Route exact path="/contact" component={contact} />
                <Route exact path="/reviews" component={reviews} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
          </div>
        </Router>
      );
    
    }
}

export default App;
