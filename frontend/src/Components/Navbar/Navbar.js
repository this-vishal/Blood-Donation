import React from "react";
import "./navbar.css";
import img from "../../Assets/logo0.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-bg navbar-light bg-light sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}> <img src={img} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="navbar-nav me-auto mb-2 mb-lg-0">
       
      </div>
      <div className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 homebar">
        <li className="nav-item">
          <Link className="nav-link  navlink" to={"/"} aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navlink" to={"/About-us"} >About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navlink" to={"/donar"}>Donar</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navlink" to={"/blood-needer"}>Blood Needer</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link navlink " to={"/gallery"} >Gallery</Link>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
