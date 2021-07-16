import React from 'react';
import Navbar from './Navbar';
import "../css/Tech.css";
// import one from "../videos/one.mp4";
// import two from "../videos/two.mp4";
// import three from "../videos/three.mp4";
// import four from "../videos/four.mp4";
// import five from "../videos/five.mp4";
import six from "../videos/six.mp4";
// import seven from "../videos/seven.mp4";
// import eight from "../videos/eight.mp4";

import Footer from './Footer';

class Tech6 extends React.Component {

    render() {
        return (
           
                <div className="Tech" style={{height : "530px"}}>
                    <h1 class="heading" style={{marginLeft : "120px"}}>Escape from a ‘bear hug attack’</h1>

                    <div class="parent">
                        <div className="para1">
                            <p>For cases where the attacker is coming from behind, you’ll want to use this move. Focus on getting low and creating space to free yourself.</p>
                            
                        </div>
                        <video class="video" src={six} autoplay="true" muted loop></video>
                    </div>
                    <ol>
                        <h2>To perform:</h2>
                        <li>Bend forward from the waist. This shifts your weight forward, making it more difficult for your attacker to pick you up. It also gives you a better angle to throw elbows from side to side to the attacker’s face.</li>
                        <li>Turn into the attacker with one of your elbows and continue counterattacking.</li>
                        <li>This should give you space to turn fully, using another move to injure the face or strike the groin. With the space these moves have created, you may be able to escape and run away.</li>
                    </ol>

                </div>
               
        )

    }
}

export default Tech6;