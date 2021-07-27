import React from 'react'
import "./Navbar.css"


const Navbar = () => {
    return (
        <div style={{height:"15%"}} class="navbar_page1">
            
            <span style={{
                fontSize:"2.95rem", 
                marginLeft:"5%",
                color:"black",
                fontWeight:"bold",
               
                }}>
                Qutrix 
            </span>

<span class="span_navbar_page1" style={{marginLeft:"17.5%"}}>
            <span class="navbar_buttons_page1">
                HOME
            </span>

            <span  class="navbar_buttons_page1">
                TESTOPS
            </span>

            <span class="navbar_buttons_page1">
                PRICING
            </span>

            <span class="navbar_buttons_page1">
                VIDEOS
            </span>

            <span class="navbar_buttons_page1">
                CONTACT
            </span>

            <span class="navbar_buttons_page1">
                LOGIN
            </span>
    </span>
           
        </div>
    )
}

export default Navbar
