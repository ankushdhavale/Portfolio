import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import vid2 from "../../assets/Home/vid2.mp4";


export default function Profile() {
  return (
    <div className="profile-container">
      
      <div className="profile-parent">
        <div className="profile-details">
          <div className="vid-container">
            <video className="heroBGVideoWrapper" autoPlay loop muted>
              <source src={vid2} type="video/mp4" />
            </video>
          </div>

          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/atharva.kutwal.73/">
                <i className="fa fa-facebook-square icons"></i>
              </a>

              <a href="https://www.instagram.com/atharvakutwal2002/">
                <i className="fa fa-instagram icons"></i>
              </a>
              <a href="https://www.linkedin.com/in/atharva-kutwal-588a8a219/">
                <i className="fa fa-linkedin icons"></i>
              </a>
              <a href="https://twitter.com/AtharvaKalyan">
                <i className="fa fa-twitter icons"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello , I'm <span className="higghlighted-text">Atharva</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Developer 💻",
                    2000,
                    "Aspiring Full Stack Developer ..🚀",
                    2000,
                    "Competitive Programmer ⚡",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Love Building Web apps .
              </span>
            </span>
          </div>
          <div className="profile-options">
            <a href="resume.pdf" download="resume.pdf">
              <button className="resume-button">
                {""}
                Get Resume{" "}
              </button>
            </a>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
}
