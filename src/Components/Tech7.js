import React from 'react';
import Navbar from './Navbar';
import "../css/Tech.css";
// import one from "../videos/one.mp4";
// import two from "../videos/two.mp4";
// import three from "../videos/three.mp4";
// import four from "../videos/four.mp4";
// import five from "../videos/five.mp4";
// import six from "../videos/six.mp4";
import seven from "../videos/seven.mp4";
// import eight from "../videos/eight.mp4";

import Footer from './Footer';

class Tech7 extends React.Component {

    render() {
        return (
            
                <div className="Tech" style={{height : "530px"}}>
                    <h1 class="heading" style={{marginLeft : "140px"}}>Escape with hands trapped</h1>

                    <div class="parent">
                        <div className="para1">
                            <p>If your attacker comes from behind and traps your arms (this is similar to a bear hug, but you won’t be able to move as freely), here’s what to do:</p>
                            
                        </div>
                        <video class="video" src={seven} autoplay="true" muted loop></video>
                    </div>
                    <ol>
                        <h2>To perform:</h2>
                        <li>First reaction should be to stop your attacker’s arms from going higher into a headlock. Shift your hips to one side. This gives an opening for strikes to the groin with open-handed slaps.</li>
                        <li>Bring your hand back up to your arms and raise your opposite elbow to turn into the wrap. Keep your arms tight to your chest as you’re turning in.</li>
                        <li>Stay aggressive with your knees and other counterattacks until you can disengage.</li>
                    </ol>

                </div>
               
        )

    }
}

export default Tech7;