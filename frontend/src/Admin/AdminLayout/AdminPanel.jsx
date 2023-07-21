import React, { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { IconName } from "react-icons/ai";
import {Link } from "react-router-dom"
import {useNavigate} from 'react-router-dom'
import "./adminpannel.css";
function AdminPanel({ children }) {
  const navigate = useNavigate()
  const [width1, setWidth] = useState(true);
  const [mouseStatus, setmouseStatus] = useState(false);
  const [activebtn, setActiveBtn] = useState(1);

  const handleLogout = (event) => {
    localStorage.clear()
    navigate('/admin')
  }
  return (
    <div className="container-xxl p-0 m-1">
      <div className="d-flex ">
        <div
          className=" sidebar-bg-color "
          style={{
            width: `${width1 ? "18%" : "5%"}`,
            minWidth: "fit-content",
            minHeight: "100vh",
          }}
          onMouseEnter={() => {
            if (width1 === false) {
              setWidth(true);
              setmouseStatus(true);
            }
          }}
          onMouseLeave={() => {
            if (mouseStatus === true) {
              setWidth(false);
              setmouseStatus(false);
            }
          }}
        >
          <div className="sticky-top z-index">
            <div
              className="sticky-top p-1 border "
              style={{ height: "max-content" }}
            >
              {width1 ? (
                <h5 className="p-2">Admin Pannel</h5>
              ) : (
                <h5 className=" p-2">Admin</h5>
              )}
            </div>
            <div className=" ">
              <div className="h-100 mt-2  position-static  d-block">
              <Link className="text-decoration-none" to={"/admin/donar"}>
                  <p
                    onClick={() => setActiveBtn(1)}
                    className={`p-2 mb-0 sidebar-items-text ${
                      activebtn === 1 && "sidebar-items-active"
                    }`}
                  >
                    Donar{" "}
                  </p>
                </Link>
                <Link className="text-decoration-none" to={"/admin/needer"}>
                  <p
                    onClick={() => setActiveBtn(2)}
                    className={`p-2 mb-0 mt-1 sidebar-items-text ${
                      activebtn === 2 && "sidebar-items-active"
                    }`}
                  >
                    Needer{" "}
                  </p>
                </Link>
              
              </div>
            </div>
          </div>
        </div>

   
        <div className="content-bg-color w-100 overflow-hidden content-width-fixed position-static">
          <div
            className="nav-color  sticky-top z-index  "
            style={{ height: "max-content" }}
          >
            <div className=" ">
              <nav class="navbar sticky-top py-lg-0 navbar-expand-lg ">
                <div class="container-fluid ">
                  <FaListUl
                    className="cursor-pointer m-1"
                    size={20}
                    onClick={() => setWidth(!width1)}
                  />

                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarText">
                    <div class="navbar-nav me-auto mb-2 mb-lg-0"></div>
                    <span class="navbar-text">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      
                        <li class="nav-item cursor-pointer" onClick={()=>handleLogout()}>
                          <span class="nav-link" href="#">

                          Logout 
                          </span>
                          
                        </li>
                      </ul>
                    </span>
                  </div>
                </div>
              </nav>

              {/* <div className="cursor-pointer d-flex gap-3">
                
                <h6>Setting</h6>
                <h6>Login</h6>
              </div> */}
            </div>
          </div>
          {/* content start here */}
          <div className=" m-0  overflow-hidden content-width-fixed ">
            {children}
          </div>
          {/* content end here */}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
