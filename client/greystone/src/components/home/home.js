import React, { Component } from "react";
import './home.css';

const Home =()=> {
  return (
<>  
<body/>

<div class="header">
  <h1>Greystone Custom Cabinetry</h1>
</div>

<div class="navbar"/>
  <a href="../components/home/home.js" class="active">Home</a>
  <a href="../components/contact/contact.js">Contact</a>
  <a href="../components/reviews/reviews.js">Reviews</a>
  <a href="../components/signup/signup.js">Signup</a>
  <a href="../components/signup/login.js">Login</a>
<div/>

<div class="row"/>
  <div class="side"/>
    <h2>About Us</h2>
    <h5>Photo of front of shop sign</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>add information about our shop</p>
  <div/>
  <div class="main"/>
    <h2>Let us come and make your dream come true for your home with our exceptional work!</h2>
    <div class="fakeimg" style="height:200px;"/><div/>
    <p>insert images of past jobs</p>
    <br/>
  <div/>
<div/>

<body/>
</>
  );
}

export default Home