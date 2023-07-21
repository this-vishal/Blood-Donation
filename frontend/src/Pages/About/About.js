import React from "react";
import "./about.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
function About() {
  return (
    <>
      <Navbar />
      <div className="aboutus">ABOUT US OUR PROJECT</div>
      <div>
        <div className="para-graph">
          <div className="intropage">
            <h3>Introduction:</h3>
            <p>
              {" "}
              Blood is essential for transporting oxygen, nutrients, and other
              substances to tissues throughout the body. The primary
              responsibility of a blood transfusion service is to provide a
              safe, sufficient and timely supply of blood and blood products.
              Blood donation is a vital part of worldwide healthcare. It relates
              to blood transfusion as a life-sustaining and life-saving
              procedure as well as a form of therapeutic phlebotomy as a primary
              medical intervention.Blood donation is a vital part of worldwide
              healthcare. It relates to blood transfusion as a life-sustaining
              and life-saving procedure as well as a form of therapeutic
              phlebotomy as a primary medical intervention. Over one hundred
              million units of blood are donated each year throughout the world.
              This article will concisely discuss a short history of blood
              donation origin and purpose, blood testing, donor eligibility and
              selection, adverse effects of donation, blood donation as a
              primary medical intervention, and a brief discussion of pathogen
              reduction and inactivation for donated blood.Blood donation and
              transfusion is a vital part of medicine in the treatment of
              hundreds of thousands of patients annually, and maintaining an
              adequate blood supply is an ongoing challenge as blood and derived
              blood products have limited shelf life.
            </p>
          </div>
          <div className="intropage">
            <h3>Objectives:</h3>
            <p>
              {" "}
              The objective of collecting blood through voluntary blood donation
              are: <br/>1.Provide safe and quality blood and blood components
              collected from voluntary donors, round the clock, at affordable
              cost to the general public and free of cost to the poor.<br/> 2.Ensure
              safety and quality of blood.
              <br />
              3. Motivate and maintain a permanent well-indexed record of
              voluntary blood donors. <br />
              4. Educating the community on the beneficial aspects of blood
              donation and harmful effect of collecting blood from paid donors.
              <br />
              5. Actively encourage voluntary blood donation and gradually
              eliminate professional blood donors. <br />
                   To achieve the general objective mentioned above the following
              are specific objective:
              <br />
              * To allow the public to make online appointment. <br />
              * Enable seekers to see available blood online at home without
              going far apart. <br />
              * Enable seekers to know the detail information about each blood
              in their home.
              <br />
              * To provide authentic and authorized features to the system where
              private and confidential data can only be viewed by authorized
              user.<br/> 
              * To improve information sharing between the organization
              and the users.
              <br />* To provide easy way of commenting the system.<br/>
               * To avoid multiple records
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
