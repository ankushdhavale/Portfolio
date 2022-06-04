import React, { useEffect } from "react";
import ActualProject from "./ActualProject";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css"

function Projects() {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
 
  return (
    <>
      <div className="proj" id="projects">
        <div className="projectHeading" data-aos="fade-up">Projects</div>
        <div className="projectContainer">
          <ActualProject 
            github="https://github.com/atharvakutwal2002/My-Expense-Tracker"
            title="Expense Tracker"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyZTEp1F91g-rGUjoNWiU9xvmQWh2B9JXiQ&usqp=CAU"
            details="Expense Tracker which takes input expenses with dates and keep a track of it ."
          ></ActualProject>
          <ActualProject
            github="https://github.com/atharvakutwal2002/Food-Order-App"
            title="Food order app"
            img="data:image/png;base64,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"
            details="A food order app build with React.js . "
          ></ActualProject>
          <ActualProject
            github="https://github.com/atharvakutwal2002/Tracalorie"
            title="Tracalorie"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxvU_jmYZX_DZpdVv9x8-kIg18RmcDBhrPIA&usqp=CAU"
            details="Web-app to track your calories "
          ></ActualProject>
          <ActualProject
            github="https://github.com/atharvakutwal2002/GitHub-finder"
            title="Github Finder"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrslFHVNbac33NcIy40MXDVyJCnA2BATtYqQ&usqp=CAU"
            details="An API based web app used to fetch details from github . "
          ></ActualProject>
        </div>
      </div>
    </>
  );
}

export default Projects;
