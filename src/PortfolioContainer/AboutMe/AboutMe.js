import React, { useEffect } from "react";
import "./AboutMe.css";
import Aos from "aos";
import "aos/dist/aos.css"

function AboutMe() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
      <div className="aboutMeContainer" id="about">
        <div className="heading" data-aos="fade-right">About Me</div>
        <div data-aos="fade-up" className="aboutMeParagraph ">
          <p >
            {" "}
            Myself Atharva kutwal .I am a second-year student pursuing IT
            engineering from D. Y. Patil College of Engineering, Akurdi, Pune. I
            am a full stack Web Development Enthusiast and a Competitive
            Programmer .Also I'm 5⭐coder on Hackerrank. Apart from my
            Professional Life I'm a fitness freak who loves hitting GYM very
            often .I just love learning new technologies and tech related things
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
