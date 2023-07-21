import React ,{useRef}from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Carousel from "../../Components/Carousel/Carousel";
import Typewriter from "typewriter-effect";
import "./landingpage.css";
import pic2 from "../../Assets/women.jpg";
import pic3 from "../../Assets/blooodddd.jpg";
import pic4 from "../../Assets/image902.jpg";
import { Link } from "react-router-dom";
import { BsArrowUpCircleFill } from "react-icons/bs";
function Landingpage() {
  new Typewriter("#typewriter", {
    loop: true,
    autoStart: true,
  });
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const Ref1 = useRef(null)
  console.log(Ref1.current);
  return (
    <>
      <Navbar />
      <div className="container-xxl">
        <div className="row m-0 p-0">
          <div className="col-12 col-md-6 position-relative d-flex ">
            <div className="type-writerposition  ms-4">
              <h1 className="type-writer">Welcome to our site</h1>
              <div className="type-writer text-danger">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "  <span style:'color:red'>Blood</span> Donation Portal"
                      )
                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
               <Link className="text-decoration-none " to='/donar'>
               <button className="btn mt-5 btn-light border-danger btn-donate m-3 text-danger ">
                  Donate Now
                </button>
               </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 p-0  position-relative">
            <Carousel />
          </div>
        </div>
        <section>
          <div className="m-lg-5 images  rounded p-5">
            <h1 className="text-center">BLOOD DONATION </h1>
            <p className="text-center">
              Blood is the main reason we all are alive; <br />
              the blood (RBC) carries oxygen from the lungs to all the parts of
              our body. <br />
              The moment this process is hampered, a person’s life is in danger.
              <br /> That’s why during many accident cases, the victim dies due
              to excessive blood loss or brain haemorrhage
              <img
                className="mt-5 rounded img-fluid"
                src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1016&q=80"
                alt=""
              />
            </p>
          </div>
        </section>

        <div  className="scroll-top-btn sticky-bottom" onClick={scrollToTop}>
        <BsArrowUpCircleFill/>
      </div>
        <div className="bg-img-1"></div>
        <div>
          <section>
            <div className="m-lg-5 images rounded p-5">
              <h1 className="text-center">BLOOD DONATION </h1>
              <p className="text-center">
                Blood donation never asks to be rich or poor, <br />
                any healthy person can donate blood.
                <img className="mt-5 rounded img-fluid" src={pic2} alt="" />
              </p>
            </div>
          </section>
        </div>
        <div className="bg-img-2"></div>
        <div>
          <section>
            <div className="m-lg-5 images rounded p-5">
              <h1 className="text-center">BLOOD DONATION </h1>
              <p className="text-center">
                Blood donation is a most important social service to the
                humankind. As being a human,<br/> we must donate blood to save others
                life. Through blood donation,<br/> we can help various needy people
                and save their precious life.
                <img className="mt-5 rounded img-fluid" src={pic3} alt="" />
              </p>
            </div>
          </section>
        </div>
        <div className="bg-img-3"></div>
        <div>
          <section>
            <div className="m-lg-5 images rounded p-5">
              <h1 className="text-center">BLOOD DONATION </h1>
              <p className="text-center">
              If you donate money, you give food!.<br/> But if you donate blood, you give life!!
                <img className="mt-5 rounded img-fluid" src={pic4} alt="" />
              </p>
            </div>
          </section>
        </div>
      </div>
  
      <Footer />
    </>
  );
}
export default Landingpage;
