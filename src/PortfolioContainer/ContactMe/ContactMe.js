import React, { useEffect }  from "react";
import "./ContactMe.css";
import Aos from "aos";
import "aos/dist/aos.css"
import { useState } from "react";

function ContactMe() {
  const [name, setName]=useState('');
  const [email, setEmail]= useState('');
  const [text, setText]= useState('');
  const nameChangeHandler=(e)=>{
    setName(e.target.value);
    console.log(name);
  }
  const emailChangeHandler=(e)=>{
    setEmail(e.target.value);
    console.log(email)
  }
  const textChangeHandler=(e)=>{
    setText(e.target.value);
    console.log(text)

  }
  const [contactFormDetails, setContactFormDetails]= useState('');
  const submitHandler=(e)=>{
    e.preventDefault();
    const details={name,email, text};
    setContactFormDetails(details);
    console.log(contactFormDetails)
  }
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <>

      <div className="contactMeContainer" id="contact">
        <form action="" onSubmit={submitHandler}>
        <div className="contactMeHeading" data-aos="fade-left">
          <p>Contact Me </p>
        </div>
        <div className="contactMeForm" data-aos="flip-left">
          <input onChange={nameChangeHandler} type="text" className="form-input inputs" placeholder="Enter your name " />
          <input
            type="email"
            className="form-input inputs"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <input type="text" size={80}   className="message inputs" placeholder="message" />
          <button className="submit-btn" type="submit">Submit</button>
        </div>
        </form>
      </div>
    </>
  );
}

export default ContactMe;
