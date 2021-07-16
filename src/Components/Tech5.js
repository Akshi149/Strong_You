import React from 'react';
import Navbar from './Navbar';
import "../css/Tech.css";
// import one from "../videos/one.mp4";
// import two from "../videos/two.mp4";
// import three from "../videos/three.mp4";
// import four from "../videos/four.mp4";
import five from "../videos/five.mp4";
// import six from "../videos/six.mp4";
// import seven from "../videos/seven.mp4";
// import eight from "../videos/eight.mp4";

import Footer from './Footer';

class Tech5 extends React.Component {

    render() {
        return (
            <div id="tech4">
            <Navbar />
            <br/><br/><br/><br/>
            
                <div className="Tech" style={{height : "680px"}} >
                    <h1 class="heading"  style={{marginLeft : "150px"}}>Alternative elbow strikes</h1>

                    <div class="parent">
                        <div className="para1">
                            <p>Depending on how you’re standing when you’re initially attacked, you may be in a better position for variations on the elbow strike.</p>
                            
                        </div>
                        <video class="video" src={five} autoplay="true" muted loop></video>
                    </div>
                    <ol>
                        <h2>To perform from the front:</h2>
                        <li>Lift your elbow to shoulder height.</li>
                        <li>Pivot on same-side foot and allow your hips to rotate, creating more momentum into the front part of your elbow when you strike.</li>
                    </ol>

                    <ol>
                        <h2>To perform from the side and back:</h2>
                        <li>Make sure you see the target.</li>
                        <li>Bring your elbow up and pivot your opposite foot, rotating your hips and turning into the target, making contact with the back part of your elbow.</li>
                    </ol>

                </div>
                <br/><br/><br/><br/>
                </div>
        )

    }
}

export default Tech5;