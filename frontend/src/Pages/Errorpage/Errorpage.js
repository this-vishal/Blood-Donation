import React from "react";
import pic1 from "../../Assets/errorpage.png";
import "./error.css";
function Error() {
  return (
    <>
      <div className="error-page">
      <img src={pic1} className="img-err " alt="img" />
        <h1 className="pagenotfound">Sorry , Page Not Found!!</h1>
        <h1 className="text-center" >404</h1>
      </div>
    </>
  );
}
export default Error;
