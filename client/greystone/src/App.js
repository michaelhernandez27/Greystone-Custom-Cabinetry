import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Home from "./components/home/home"
import Contact from "./components/contact"
import Reviews from "./components/reviews"
import Navbar from "./components/navbar"
import Signup from "./components/signup"

const isLoggedIn = () => {
    return localStorage.getItem("TOKEN_KEY") != null;
  };

const HomeRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        // ternary condition
  
         isLoggedIn() === true ? (
          <Component {...props} />
        ) : (
          <Link to="/home" />
        )
      }
    />
  );
    
class App extends Component() {
    //componentWillUpdate(nextProps, nextState) {
      //  console.log("update");
      //}
    render() {
    return (
        <Router>
          <div>
          <Navbar/>
            <Switch>
                <HomeRoute exact path="/home" component={Home} />
                <Route exact path="/navbar" component={Navbar} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/reviews" component={Reviews} />
                <Route exact path="/signup" component={Signup} />
                {isLoggedIn() && <Navbar/>}
            </Switch>
          </div>
        </Router>
      );
    
    }
}

export default App;
