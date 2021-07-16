import React from 'react';
import Navbar from './Navbar';
import "../css/Tech.css";
// import one from "../videos/one.mp4";
// import two from "../videos/two.mp4";
import three from "../videos/three.mp4";
// import four from "../videos/four.mp4";
// import five from "../videos/five.mp4";
// import six from "../videos/six.mp4";
// import seven from "../videos/seven.mp4";
// import eight from "../videos/eight.mp4";

import Footer from './Footer';

class Tech3 extends React.Component {

    render() {
        return (
            <div id="tech3">
            <Navbar />
            <br/><br/><br/><br/>
                <div className="Tech" style={{height : "600px"}}>
                    <h1 class="heading" style={{marginLeft : "250px"}}>Heel palm strike</h1>

                    <div class="parent">
                        <div className="para1">
                            <p>This move can cause damage to the nose or throat. To execute, get in front of your attacker as much as is possible.</p>
                            
                        </div>
                        <video class="video" src={three} autoplay="true" muted loop></video>
                    </div>
                    <ol>
                        <h2>To perform:</h2>
                        <li>With your dominant hand, flex your wrist.</li>
                        <li>Aim for either the attacker’s nose, jabbing upward from the nostrils, or underneath the attacker’s chin, jabbing upward at the throat.</li>
                        <li>Make sure to recoil your strike. Pulling your arm back quickly will help thrust the attacker’s head up and back.</li>
                        <li>This will cause your attacker to stagger backward, allowing you to escape their grasp.</li>
                    </ol>

                </div>
                <br/><br/><br/><br/>
                </div>
               
        )

    }
}

export default Tech3;