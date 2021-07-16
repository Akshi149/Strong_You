import React from 'react';
import "../css/About.css";
import image from "../images/strongyou.svg";

export default function About(){
    return(
      <>
      <section
    id="hero"
    className="d-flex flex-column justify-content-end align-items-center"
  >
    <img src={image} alt="" />
    <div className="centered">Strong You</div>
    <div className="centered2">You Can and You Will !</div>
    <svg
      className="hero-waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="wave-path"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        ></path>
      </defs>
      <g className="wave1">
        <use
          xlinkHref="#wave-path"
          x={50}
          y={3}
          fill="rgba(255,255,255, .1)"
        ></use>
      </g>
      <g className="wave2">
        <use
          xlinkHref="#wave-path"
          x={50}
          y={0}
          fill="rgba(255,255,255, .2)"
        ></use>
      </g>
      <g className="wave3">
        <use xlinkHref="#wave-path" x={50} y={9} fill="#fff"></use>
      </g>
    </svg>
  </section>
        <section id="about" className="about">
        <div className="container">
  
          <div className="section-title" data-aos="zoom-out">
            <h2>About</h2>
            <p>Who we are</p>
          </div>
  
          <div className="row content" data-aos="fade-up">
            <div className="col-lg-6">
              <p>
              Website to help women with handy knowledge on how to defend themselves while out in public
              </p>
              <ul>
                <li><i className="ri-check-double-line"></i> 
The website contains various ways to help empower women in this new era
  It contains different action-reaction techniques in form of GIFs to save time in case of emergency
  </li>
                <li><i className="ri-check-double-line"></i> It also includes emergency contacts of diffent areas
   </li>
                <li><i className="ri-check-double-line"></i> It also has a store page that shows diffrent types of materials that can be carried in daily life for safety purposes</li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
              Last but not the least the most important feature of this website is the report portal where the user can submit report with relevant informations and this report will be shared with nearby NGOs or police so that help can reach them in time.
              </p>
              <a href="." className="btn-learn-more">Learn More</a>
            </div>
          </div>
  
        </div>
      </section>
      </>
    )
}
