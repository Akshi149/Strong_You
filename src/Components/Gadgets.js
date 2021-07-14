import React from 'react';
import '../css/Gadget.css';
import Navbar from './Navbar';
import store from '../js/store';

var slides = store.slides;
var items = store.items;
export default class Gadget extends React.Component{
    render(){
        return(
    <div>  
        <Navbar active = {"Store"}/>
        <br/><br/>
        <h1 id = "Gadget" style={{color:'black'}}><u>Self Defence Gadgets</u>{" "}</h1>
        <div className="slideshow-container">
            <div className="mySlides fade">
                <div className="numbertext">{slides.text}</div>
                <img src={`..${slides.image}`} style={{ width: "100%" }} alt = ''/>
            </div>
            <a className="prev" onclick="plusSlides(-1)">
            ❮
            </a>
            <a className="next" onclick="plusSlides(1)">
            ❯
            </a>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
            <span className="dot" onclick="currentSlide(1)" />
            <span className="dot" onclick="currentSlide(2)" />
            <span className="dot" onclick="currentSlide(3)" />
        </div>
  {/* <style
    dangerouslySetInnerHTML={{
      __html:
        "\na:link, a:visited {\n  background-color:#4d194d;\n  color: white;\n  padding: 14px 25px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n}\n\na:hover, a:active {\n  background-color: black;\n}\n"
    }}
  /> */}
        <p id = 'gadget'>
            {" "}
            It’s an intimidating world out there, where you can always do a little extra
            to keep yourself protected.Women safety in India is highly compromised which
            have actually resulted in making India - A Vulnerable Country, especially
            for women. So, there is a high need for women to be aware of all the
            self-defense techniques and all the smart apps that are made for women
            safety. Not only these women safety gadgets can protect you from all the
            risky situations but they are also easy and safe to carry in your handbag.
            Apart from knowing the art of self defense, having some effective self
            defense weapons will only help you in protecting yourself.
        </p>
  { items.map((m)=>{

        return <>
        <h2 id='gadgets'><u>{m.heading}</u></h2>
        <p id='gadget'>
            <img
                src={`..${m.image}`}
                alt={m.heading}
                style={{ width: 200, height: 170, marginLeft: 15 }} />
            {m.text}
        </p>
        {m.links.map((r)=>{
        return <p id = 'gadget'>
                <a href={r.link}>
                {r.text}
                </a>
                </p>
            })}
            </>
    })}
</div>
        )}};
