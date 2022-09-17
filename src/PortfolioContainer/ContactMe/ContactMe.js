import React, { useEffect } from "react";
import "./ContactMe.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState } from "react";


function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const textChangeHandler = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const details = {
      enteredname: name,
      enteredEmail: email,
      enteredText: text,
    };

    console.log(details);

    fetch("https://portfolio-d7301-default-rtdb.firebaseio.com/contact.json", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body:JSON.stringify(details) ,
    })
      .then((response) => response.json)
      .then((data) => console.log("Success ", data))
      .catch((err) => console.log(err));

    setName("");
    setEmail("");
    setText("");
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="contactMeContainer" id="contact">
          <div className="contactMeHeading" data-aos="fade-left">
            <p>Contact Me </p>
          </div>
          <div className="contactMeForm" data-aos="flip-left">
            <input
              onChange={nameChangeHandler}
              type="text"
              value={name}
              className="form-input inputs"
              placeholder="Enter your name "
            />
            <input
              onChange={emailChangeHandler}
              type="email"
              className="form-input inputs"
              value={email}
              name=""
              id=""
              placeholder="Enter your email"
            />
            <input
              type="text"
              size={80}
              value={text}
              onChange={textChangeHandler}
              className="message inputs"
              placeholder="message"
            />
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactMe;
