import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import home from "./components/home/home.js"
import navbar from "./components/navbar/navbar.js"
import contact from "./components/contact/contact.js"
import reviews from "./components/reviews/reviews.js"
import Navbar from "./components/navbar/navbar.js";

function App() {
    return (
        <Router>
          <div>
          <Navbar/>
            <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/navbar" component={navbar} />
                <Route exact path="/contact" component={contact} />
                <Route exact path="/reviews" component={reviews} />
            </Switch>
          </div>
        </Router>
      );
    

}

export default App;
