import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="bg-dark text-light">
        <div className="row m-0 ">
          <div className="col-12 text-center  col-md-6 col-lg-4">
            <ul>
              <li className="nav-item">
                <Link
                  className="nav-link active navlink1"
                  to={"/"}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 text-center  col-md-6 col-lg-4">
            <ul>
              <li className="nav-item">
                <Link
                  className="nav-link active navlink1"
                  to={"/About-us"}
                  aria-current="page"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 text-center  col-md-6 col-lg-4">
            <ul>
              <li className="nav-item">
                <Link className="nav-link navlink1" to={"/donar"}>
                  Donar
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 text-center  col-md-6 col-lg-4">
            <ul>
              <li className="nav-item">
                <Link
                  className="nav-link active navlink1"
                  to={"/blood-needer"}
                  aria-current="page"
                >
                  Blood Needer
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 text-center  col-md-6 col-lg-4">
            <ul>
              <li className="nav-item">
                <Link
                  className="nav-link active navlink1"
                  to={"/gallery"}
                  aria-current="page"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 text-center  col-md-6 col-lg-4">
            <ul>
              <li className="nav-item">
                <Link
                  className="nav-link active navlink1"
                  to={"/admin"}
                  aria-current="page"
                >
                 0000
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-white m-0" />
        <p class="text-center pb-3 pt-1">Designed By Vishal Sharma </p>
      </div>
    </div>
  );
}
export default Footer;
