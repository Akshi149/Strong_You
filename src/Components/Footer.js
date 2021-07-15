import React from 'react';
import "../css/Footer.css";
import logo from "../images/LOGO.png"
export default function Footer() {
    return(
    <footer id="footer">
      <div className="container">
        <img src={logo} alt="" className="img-fluid" style= {{width:"10%"}}/>
        <h3> Strong You </h3>
        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
        <div class="social-links">
          <a href="#" className="facebook"><img src="https://img.icons8.com/fluent/48/000000/facebook-new.png"/></a>
          <a href="#" className="instagram"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
          <a href="#" className="google-plus"><img src="https://img.icons8.com/fluent/48/000000/google-plus.png"/></a>
          <a href="#"  className="linkedin"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/></a>
        </div>
        <div className="copyright">
          &copy; Copyright <strong><span>Strong You</span></strong>. All Rights Reserved
        </div>
      </div>
    </footer>
    );
}
