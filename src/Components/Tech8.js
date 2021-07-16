import React from 'react';
import Navbar from './Navbar';
import "../css/Tech.css";
// import one from "../videos/one.mp4";
// import two from "../videos/two.mp4";
// import three from "../videos/three.mp4";
// import four from "../videos/four.mp4";
// import five from "../videos/five.mp4";
// import six from "../videos/six.mp4";
// import seven from "../videos/seven.mp4";
import eight from "../videos/eight.mp4";

import Footer from './Footer';

class Tech8 extends React.Component {

    render() {
        return (
            <div id="tech4">
            <Navbar />
            <br/><br/><br/><br/>
           
                <div className="Tech">
                    <h1 class="heading" style={{marginLeft : "130px"}}>Escape from side headlock</h1>

                    <div class="parent">
                        <div className="para1">
                            <p>When the attacker locks their arm around your head from the side, your first instinct should be to avoid getting choked.</p>
                            
                        </div>
                        <video class="video" src={eight} autoplay="true" muted loop></video>
                    </div>
                    <ol>
                        <h2>To perform:</h2>
                        <li>Turn into the attacker’s side as much as possible to avoid being choked.</li>
                        <li>With your hand that’s furthest away, strike the groin with open-handed slaps until you have enough mobility to turn your head all the way out to disengage.</li>
                    </ol>

                </div>
                <br/><br/><br/><br/>
                </div>
        )

    }
}

export default Tech8;