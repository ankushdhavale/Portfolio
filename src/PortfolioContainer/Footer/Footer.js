import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footerContainer'>
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

          <div className="textContainerFooter">
              <p>Made with ❤ by Atharva | &copy; 2022</p>
                  
          </div>

          
    </div>
  )
}

export default Footer