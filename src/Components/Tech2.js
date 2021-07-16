import React from 'react';
import Navbar from './Navbar';
import "../css/Tech.css";
// import one from "../videos/one.mp4";
import two from "../videos/two.mp4";


import Footer from './Footer';

class Tech2 extends React.Component {

    render() {
        return (
            <div id="tech2">
            <Navbar />
            <br/><br/><br/><br/>
                <div className="Tech">
                    <h1 class="heading">Groin kick</h1>

                    <div class="parent">
                        <div className="para1">
                            <p>If someone is coming at you from the front, a groin kick may deliver enough force to paralyze your attacker, making your escape possible.</p>
                            
                        </div>
                        <video class="video" src={two} autoplay="true" muted loop></video>
                    </div>
                    <ol>
                        <h2>To perform:</h2>
                        <li>Stabilize yourself as best you can.</li>
                        <li>Lift your dominant leg off the ground and begin to drive your knee upward.</li>
                        <li>Extend your dominant leg, drive hips forward, slightly lean back, and kick forcefully, making contact between your lower shin or ball of your foot and the attacker’s groin area.</li>
                    </ol>
                </div>
                <br/><br/><br/><br/>
                </div>
        )

    }
}

export default Tech2;