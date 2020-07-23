import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/home/home"
import Contact from "./components/contact"
import Reviews from "./components/reviews"
import Navbar from "./components/navbar"
import Signup from "./components/signup"

class App extends Component() {
    render() {
    return (
        <Router>
          <div>
          <Navbar/>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/navbar" component={Navbar} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/reviews" component={Reviews} />
                <Route exact path="/signup" component={Signup} />
            </Switch>
          </div>
        </Router>
      );
    
    }
}

export default App;
