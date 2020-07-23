import React, { Component } from "react";
import './home.css';

class Home extends Component () {
  render() {
    return ( 
<div>
        <div className="header">
          <h1>
Greystone Custom Cabinetry
</h1>
        </div>
        <div className="navbar">
          <a
href="../components/home"
className="active">Home</a>
          <a href="../components/contact/contact.js">Contact</a>
          <a href="../components/reviews/reviews.js">Reviews</a>
          <a href="../components/signup/signup.js">Signup</a>
          <a href="../components/login/login.js">Login</a>
          <div>
            <div className="row">
              <div className="side">
                <h2>About Us</h2>
                <h5>Photo of front of shop sign</h5>
                <div className="fakeimg" style={{height: 200}}>Image</div>
                <p>add information about our shop</p>
                <div>
                  <div className="main">
                    <h2>Let us come and make your dream come true for your home with our exceptional work!</h2>
                    <div className="fakeimg" style={{height: 200}}>
<div>
                        <p>insert images of past jobs</p>
                        <br />
                        <div>
                          <div>
                          </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

  );
}
}

export default Home