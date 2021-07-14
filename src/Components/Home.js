import React from 'react';
import About from './About.js';
import Contact from './Contact.js';
import Navbar from './Navbar';
export default class Home extends React.Component{
    render(){
        return(
            <div>
            <Navbar active={"Home"}/>
            <About/>
            <Contact/>
            </div>
        )
    }
}
