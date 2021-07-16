import React from 'react';
import "../css/Navbar.css";
import logo from "../images/LOGO.png";

var $ = window.$;

export default class Navbar extends React.Component{
  render(){
      const routes = [
        'Home',
        'Techniques', 
        'Store',
        'Emergency Contacts',
        'Report'
      ];
  
    return(
        <>
        <header
    id="header"
    className="fixed-top d-flex align-items-center header-transparent header-scrolled navbar-expand-sm"
  >
    <div className="container d-flex align-items-center justify-content-between">
      <div className="logo">
        <h1>
          <a href="/">
            <img
              src={logo}
              alt=""
              className="img-fluid"
              style={{ width: "7.5%", height: "15%" }}
            />{" "}
            Strong You
          </a>
        </h1>
        {/* <h1><a href="#"></a></h1> */}
      </div>
      <nav id="navbar" className="navbar">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto" >
            {routes.map(r => {
                                if (this.props.active === r) {
                                    return (
                                        <li className="nav-item active">
                                            {r !== "Home" && <a class="nav-link" href={"/" + r}>{r}</a>}
                                            {r === "Home" && <a class="nav-link" href={"/"}>{r}</a>}
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li className="nav-item">
                                        {r !== "Home" && <a class="nav-link" href={"/" + r}>{r}</a>}
                                        {r === "Home" && <a class="nav-link" href={"/"}>{r}</a>}
                                        </li>
                                    )
                                }
                            })}
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
        </div>
      </nav>
    </div>
  </header>
  </>
    );
}
}
