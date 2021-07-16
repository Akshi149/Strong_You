import React from 'react';
import Navbar from './Navbar';
import "../css/Tech.css";
// import one from "../videos/one.mp4";
// import two from "../videos/two.mp4";
// import three from "../videos/three.mp4";
import four from "../videos/four.mp4";
// import five from "../videos/five.mp4";
// import six from "../videos/six.mp4";
// import seven from "../videos/seven.mp4";
// import eight from "../videos/eight.mp4";

import Footer from './Footer';

class Tech4 extends React.Component {

    render() {
        return (
           
                <div className="Tech">
                    <h1 class="heading">Elbow strike</h1>

                    <div class="parent">
                        <div className="para1">
                            <p>If your attacker is in close range and you’re unable to get enough momentum to throw a strong punch or kick, use your elbows.</p>
                            
                        </div>
                        <video class="video" src={four} autoplay="true" muted loop></video>
                    </div>
                    <ol>
                        <h2>To perform:</h2>
                        <li>If you can, stabilize yourself with a strong core and legs to ensure a powerful blow.</li>
                        <li>Bend your arm at the elbow, shift your weight forward, and strike your elbow into your attacker’s neck, jawline, chin, or temple. These are all effective targets.</li>
                        <li>This may cause your attacker to loosen their grip, allowing you to run.</li>
                    </ol>

                </div>
                
        )

    }
}

export default Tech4;