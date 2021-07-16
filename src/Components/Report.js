import React from 'react';
import '../css/report.css';
import img from "../images/graphics_2.png";
import Navbar from '../Components/Navbar';
export default class Report extends React.Component {
    constructor() {
        super(
        function validate(){
        var ReportTitle = document.getElementById("ReportTitle").value;
        var date = document.getElementById("date").value;
        var time = document.getElementById("Time").value;
        var CrimeArea = document.getElementById("CrimeArea/location").value;
        var CrimeCategory = document.getElementById("CrimeCategory").value;
         var message = document.getElementById("message").value;
        var error_message = document.getElementById("error_message");
        
        error_message.style.padding = "10px";
        
        var text;
        if(ReportTitle.length < 3){
          text = "Please Enter valid Title";
          error_message.innerHTML = text;
          return false;
        }
        if(date.length < 7){
          text = "Please Enter Correct Date";
          error_message.innerHTML = text;
          return false;
        }
        if(time.length<3){
          text = "Please Enter valid time";
          error_message.innerHTML = text;
          return false;
        }
        if(CrimeArea<2){
          text = "Please Enter valid Area Name";
          error_message.innerHTML = text;
          return false;
        }
        if(CrimeCategory.length<1){
            text="Please Enter Valid Input";
            error_message.innerHTML=text;
            return false;
        }
        if(message.length < 50){
          text = "Please Enter More Than 50 Characters";
          error_message.innerHTML = text;
          return false;
        }
      alert("Form Submitted Successfully");
          return true;
      }
        )}
    render() {
        return(
<div className = 'report'>
    <Navbar active = {"Report"}/>
    <div class="wrapper">
        <h2>Submit a New Report</h2>
        <div id="error_message">     
    </div>
    <form action="" id="myform" onsubmit = "return validate()">
        <div class="input_field">
            <input type="text" placeholder="Report Title" id="ReportTile"/>
        </div>
        <div class="input_field">
            <input type="text" placeholder="Date" id="date"/>
        </div>
        <div class="input_field">
            <input type="text" placeholder="Time" id="Time"/>
        </div>
        <div class="input_field">
            <input type="text" placeholder="Crime Area/location" id="CrimeArea/location"/>
        </div>
        <div class="input_field">
            <label for="Crime">Select Crime Category </label>
            <select id="catrgory" name="Crime category">
                <option value="stalk">Stalk</option>
                <option value="Verhar">Verbal Harassment</option>
                <option value="Groping">Groping</option>
                <option value="Indecent">Indecent Exposure</option>
                <option value="SexualAss">Sexual Assault</option>
                <option value="Purse-Snatching">Purse-Snatching</option>
                <option value="Mugging">Mugging</option>
                <option value="Sexualharr">Sexual Harassment</option>
                <option value="other">Other</option>
            </select>
        </div>
        
        <div class="input_field">
            <textarea placeholder="Message" id="message"></textarea>
        </div>
        <div class="btn">
            <input type="submit"/>
        </div>
    </form>
 
</div>
 <img id = 'img' src={img} align="right" alt="Img" /> 
 </div>
        )
    }
};
