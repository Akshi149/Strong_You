import React from 'react';
import Navbar from './Navbar';
import "../css/Techniques.css";
import Videos from '../js/videos.js';

var technique = Videos.techniques;

class Techniques extends React.Component {
    render() {
        return (
            <div>
                <Navbar acive ={'Techniques'}/>
                <br/><br/><br/><br/>
                <div>
                    <h1 class="heading" style={{color:'#291b25', textAlign:'center'}}><u>SELF DEFENSE MOVES</u></h1>
                </div>
                <br/><br/>
                <div class="container mt-40">
                    <div class="row mt-30">
                {technique.map((m,index)=>{
                    return  <div class="col-lg-3 col-md-6 col-sm-6 ">
                    <div class="parent">
                        <div class="technique">
                        <div class="text" style={{color:'#291b25'}}>{m.text}</div>
                        <video class="video" src={`..${m.video}`} autoplay="true" muted loop></video>
                        </div>
                        {index%4 === 3 && <br/>}
                        </div>
                        </div>
                })}
                    </div>
                    </div>
            </div>
        )

    }
}

export default Techniques;
