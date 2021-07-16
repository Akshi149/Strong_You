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
        <br/><br/><br/>
        <h1 id = "Gadget" style={{color:'black'}}><u>SELF DEFENSE GADGETS</u>{" "}</h1>
        <br/>
        {/* <div className="slideshow-container">
            <div className="mySlides fade">
                <div className="numbertext">{slides.text}</div>
                <img src={`..${slides.image}`} style={{ width: "100%" }} alt = ''/>
            </div>
            {/* <a className="prev" onClick="plusSlides(-1)">
            ❮
            </a>
            <a className="next" onClick="plusSlides(1)">
            ❯
            </a> */}
        {/* </div>
        <br />
        <div style={{ textAlign: "center" }}>
            <span className="dot" onclick="currentSlide(1)" />
            <span className="dot" onclick="currentSlide(2)" />
            <span className="dot" onclick="currentSlide(3)" />
        </div> */} 
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
        <br/>
  { items.map((m)=>{

        return <>
        <h2 id='gadgets'><u>{m.heading}</u></h2>
        <div style={{display: 'flex'}}>
        <img
            id = 'images'
            src={`..${m.image}`}
            alt={m.heading}
            style={{ width: 400, height: 370, marginLeft: 15, marginTop:'2%' }} />
            <br/><br/>
        <p id='gadget' style={{marginTop: "5%", marginLeft:'15%', marginRight: "10%"}}>    
            {m.text}
        </p>
        </div>
        <div style={{display:'flex',marginLeft:'50%'}}>
            {m.links.map((r)=>{ 
            return  <button id = 'gadget' style={{background:"#ed5b2d", width:"30%", height:'17%', marginLeft:'2%', borderRadius: "7px", border:"none"}}>
                        <a href={r.link} style={{ color:"#f6f6e9",}} >
                        {r.text}
                        </a>
                    </button>
                })}
        </div>
        <br/><br/><br/><br/>
            </>
    })}
</div>
        )}};
