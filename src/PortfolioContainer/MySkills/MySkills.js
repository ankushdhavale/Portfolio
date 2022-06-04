import React, { useEffect } from "react";
import "./MySkills.css";
import icon from "../../assets/Home/icon.png";
import Aos from "aos";
import "aos/dist/aos.css"

function MySkills() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
      <div className="mySkillsContainer" id="skills">
        <div className="square"></div>
        <div className="square"> </div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="mySkillsHeading" data-aos="fade-down">My Skills</div>
        <div className="iconAndSkillsContainer">
          <div className="iconImg" data-aos="fade-right">
            <img className="skillsImg" src={icon} alt="" />
          </div>
          <div className="actualSkillsCOntainer" data-aos="fade-left">
            <div className="skillName">
              <label className="skillLabel" for="html">
                HTML
              </label>
              <progress className="progressBar" id="html" value="85" max="100">
                {" "}
                85%{" "}
              </progress>
            </div>

            <div className="skillName">
              <label className="skillLabel" for="CSS">
                CSS
              </label>
              <progress id="CSS" value="70" max="100">
                {" "}
                85%{" "}
              </progress>
            </div>

            <div className="skillName">
              <label className="skillLabel" for="Javascript">
                Javascript
              </label>
              <progress id="Javascript" value="75" max="100">
                {" "}
                75%{" "}
              </progress>
            </div>

            <div className="skillName">
              <label className="skillLabel" for="React">
                React
              </label>
              <progress id="React" value="45" max="100">
                {" "}
                45%{" "}
              </progress>
            </div>

            <div className="skillName">
              <label className="skillLabel" for="Java">
                Java
              </label>
              <progress id="Java" value="55" max="100">
                {" "}
                55%{" "}
              </progress>
            </div>

            <div className="skillName">
              <label className="skillLabel" for="C++">
                C++
              </label>
              <progress id="C++" value="85" max="100">
                {" "}
                85%{" "}
              </progress>
            </div>

            <div className="skillName">
              <label className="skillLabel" for="Python">
                Python
              </label>
              <progress id="Python" value="45" max="100">
                {" "}
                45%{" "}
              </progress>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MySkills;
