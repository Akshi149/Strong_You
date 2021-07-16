import React from 'react';
import Navbar from './Navbar';
import "../css/Tech.css";
import one from "../videos/one.mp4";
import Footer from './Footer';

class Tech1 extends React.Component {

    render() {
        return (
            <div id="tech1">
                <Navbar />
                <br/><br/><br/><br/>
                <div className="Tech">
                    <h1 class="heading">Hammer strike</h1>

                    <div class="parent">
                        <div className="para1">
                            <p>Using your car keys is one of the easiest ways to defend yourself. Don’t use your fingernails, because you’re more at risk to injure your hands.</p>
                            <p>Instead, if you feel unsafe while walking at night, have your keys stick out from one side of your fist for hammer strikes.</p>
                        </div>
                        <video class="video" src={one} autoplay="true" muted loop></video>
                    </div>
                    <ol>
                        <h2>To perform:</h2>
                        <li>Hold your key ring in a tight fist, like holding a hammer, with keys extending from the side of your hand.</li>
                        <li>Thrust downward toward your target.</li>
                    </ol>

                </div>
                <br/><br/><br/><br/>
                </div>
            
        )

    }
}

export default Tech1;