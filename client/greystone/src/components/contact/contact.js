import React, { Fragment } from 'react';
import './contact.css'

const Contact =()=> {
    
    //insert functionality of contact page

    return (
        <div class="container"/> 
            <div style="text-align:center">
                <h2>Contact Us</h2>
                <p>Swing by for a tour of the workshop, or leave us a message:</p>
        </div>
    <div class="row"/>
        <div class="column"/>
            <img src="/greystone picture?" style="width:100%"/>
        <div/>
    <div class="column"/>
      <form action="/action_page.php"/>
        
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.."/>
        
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="Your email.."/>
        
        <label for="phone">Phone Number</label>
        <input type="text" id="phone" name="phone" placeholder="Your phone number.."/>

        <label for="location">City of Location</label>
        <input type="text" id="location" name="location" placeholder="Your city of location.."/>
        
        <label for="comment">Comments/Questions</label>
        <textarea id="comment" name="comment" placeholder="Write something.." style="height:170px"></textarea>
        
        <input type="submit" value="Submit"/>
      <form/>
    <div/>
  <div/>
<div/>
     
        );
    }
  
  export default Contact