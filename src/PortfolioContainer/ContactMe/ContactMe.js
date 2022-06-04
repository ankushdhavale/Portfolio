import React, { useEffect }  from "react";
import "./ContactMe.css";
import Aos from "aos";
import "aos/dist/aos.css"

function ContactMe() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
      <div className="contactMeContainer" id="contact">
        <div className="contactMeHeading" data-aos="fade-left">
          <p>Contact Me </p>
        </div>
        <div className="contactMeForm" data-aos="flip-left">
          <input type="text" className="form-input inputs" placeholder="Enter your name " />
          <input
            type="email"
            className="form-input inputs"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <input type="text" size={80}   className="message inputs" placeholder="message" />
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
