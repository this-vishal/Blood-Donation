import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./bloodneeder.css";
import axios from 'axios'
import {  toast } from 'react-toastify';
function BloodNeeder() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [aadhar, setAadharcard] = useState("");
  const [group, setGroup] = useState("");
  const[firstNameError,setFirstNameError ]=useState(false);
const[lastNameError,setLastNameerror]=useState(false);
const[genderError,setGenderError ]=useState(false);
const[emailError,setEmailerror]=useState(false);
const[addressError,setAddressError ]=useState(false);
const[mobileError,setMobileerror]=useState(false);
const[aadharError,setAadharError ]=useState(false);
const[groupError,setGroupError]=useState(false);

  useEffect(() => {}, [firstName, lastName]);
  async function setHandle(event) {
    if(firstName == ""){
      setFirstNameError(true)
    }
    if(lastName==""){
      setLastNameerror(true)
    }
    if(gender==""){
      setGenderError(true)
    }
    if(email == ""){
      setEmailerror(true)
    }
    if(address==""){
      setAddressError(true)
    }
    if(mobile==""){
      setMobileerror(true)
    }
    if(aadhar==""){
      setAadharError(true)
    }
    if(group==""){
      setGroupError(true)
    }

    setFirstName("");
    setLastName("");
    setGender("");
    setEmail("");
    setAddress("");
    setMobile("");
    setAadharcard("");
    setGroup("");
    event.preventDefault();
    const data = {
      firstName:firstName,
      lastName:lastName,
      gender:gender,
      email:email,
      address:address,
      mobile:mobile,
      aadhar:aadhar,
      group:group,
    }


   await axios.post('http://localhost:9000/blood-request-create', data)
  .then(response => {
    console.log('Response:', response.data);
    toast("Successfully sent");
  })
  .catch(error => {
    console.error('Error:', error);
  });
    setTimeout(()=>{
      setFirstNameError(false)
      setLastNameerror(false)
      setGenderError(false)
      setEmailerror(false)
      setAddressError(false)
      setMobileerror(false)
      setAadharError(false)
      setGroupError(false)

    },3000)
  }
  return (
    <>
      <Navbar />
      <div className="position-relative">
        <div className="aboutus ">BLOOD NEEDER</div>
        <div className="form-position">
          <form
            className="row g-3 needs-validation m-0"
            onSubmit={setHandle}
            novalidate
          >
            <div className="col-md-6 position-relative">
              <label for="validationTooltip01" className="form-label">
                First Name
              </label>
              <input
                value={firstName}
                onChange={(Event) => setFirstName(Event.target.value)}
                type="text"
                className="form-control"
                id="validationTooltip01"
                // required
              />
              {
           firstNameError&&
           <span className="text-danger">First name field is required*</span> 
          }
              <div className="valid-tooltip">Looks good!</div>
            </div>
            <div className="col-md-6 position-relative">
              <label for="validationTooltip02" className="form-label">
                Last Name
              </label>
              <input
                value={lastName}
                onChange={(Event) => setLastName(Event.target.value)}
                type="text"
                className="form-control"
                id="validationTooltip02"
                // required
              />
                {
                lastNameError&&
                <span className="text-danger">Last name field is required</span>
              }
              <div className="valid-tooltip">Looks good!</div>
            </div>
            <div className="col-md-6 position-relative">
              <label
                for="validationTooltip05"
                className="form-label addressmobile"
              >
                Gender
              </label>
              <select
                value={gender}
                onChange={(Event) => setGender(Event.target.value)}
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Please select </option>
                <option value="1">Female</option>
                <option value="2">Male</option>
                <option value="3">Others</option>
              </select>
              {
                genderError&&
                <span className="text-danger">Gender field is required</span>
              }
            </div>
            <div className="col-md-6 position-relative">
              <label for="validationTooltipUsername" className="form-label">
                E-Mail
              </label>
              <div className="input-group has-validation">
                <input
                  value={email}
                  onChange={(Event) => setEmail(Event.target.value)}
                  type="email"
                  className="form-control"
                  id="validationTooltipUsername"
                  aria-describedby="validationTooltipUsernamePrepend"
                  // required
                />
               
              </div>
              {
           emailError&&
           <span className="text-danger">Email field is required*</span> 
          }
            </div>
            <div className="col-md-6 position-relative">
              <label
                for="validationTooltip03"
                className="form-label addressmobile"
              >
                Address
              </label>
              <input
                value={address}
                onChange={(Event) => setAddress(Event.target.value)}
                type="text"
                className="form-control addressmobile"
                id="validationTooltip03"
                // required
              />
               {
           addressError&&
           <span className="text-danger"> Address field is required*</span> 
          }

            </div>

            <div className="col-md-6 position-relative">
              <label
                for="validationTooltip05"
                className="form-label addressmobile"
              >
                Mobile Number
              </label>
              <input
                value={mobile}
                onChange={(Event) => setMobile(Event.target.value)}
                type="number"
                className="form-control addressmobile"
                id="validationTooltip05"
                // required
              />
                 {
           mobileError&&
           <span className="text-danger">Mobile no. field is required*</span> 
          }
           

            </div>

            <div className="col-md-6 position-relative">
              <label
                for="validationTooltip05"
                className="form-label addressmobile"
              >
                Aadhar Card Number
              </label>
              <input
                value={aadhar}
                onChange={(Event) => setAadharcard(Event.target.value)}
                type="number"
                className="form-control addressmobile"
                id="validationTooltip05"
                // required
              />
                 {
           aadharError&&
           <span className="text-danger">Aadhar card field is required*</span> 
          }


            </div>
            <div className="col-md-6 position-relative">
              <label
                for="validationTooltip05"
                className="form-label addressmobile"
              >
                Blood Group
              </label>
              <select
                value={group}
                onChange={(Event) => setGroup(Event.target.value)}
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Please select </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
              {
           groupError&&
           <span className="text-danger">Blood Group field is required*</span> 
          }

            </div>
            <div className="col-12 text-center">
              <button className="btn btn-outline-dark" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BloodNeeder;
