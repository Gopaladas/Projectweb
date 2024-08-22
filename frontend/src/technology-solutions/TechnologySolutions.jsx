import React from 'react';
import './TechnologySolutions.css';
import Tech1 from './Tech1';

const TechnologySolutions = () => {
  return (
    <div>
    <div className="technologySolution-container">
      {/* Left Section with Message and Buttons */}
      <div className="technologySolution-left">
        <h3>We’re here to help! Tell us what you’re looking for and we’ll get you connected to the right people.</h3>
        <div className="technologySolution-buttons">
          <a href="https://forms.google.com/contact-us" target="_blank" rel="noopener noreferrer" className="technologySolution-button">
            Request for Services
            <span className="technologySolution-tooltip">Go to Contact Us Form</span>
          </a>
          <a href="/find-jobs" className="technologySolution-button">
            Find Jobs
            <span className="technologySolution-tooltip">Explore Job Listings</span>
          </a>
          <a href="/hire-alert" className="technologySolution-button">
            Hire Alert
            <span className="technologySolution-tooltip">Receive Hiring Alerts</span>
          </a>
        </div>
      </div>

      {/* Right Section with GIF Background and Text */}
      <div className="technologySolution-right">
        <div className="technologySolution-content">
          <p className="technologySolution-description">
            <span className="s1">Technology Solutions</span> <br /><br />
            <span className="s2">AMXSOL∞</span><br />
            <span className="s2">Contact us for </span><span className="infi">∞</span><span className='italic'>infinite possibilities</span><br/>
           <span className='s3'>Business Solutions  | Technology Solutions | Talent Solutions  |</span>
          </p>
          <div className="technologySolution-social">
            <span>Connect with us on: </span>
            <a href="https://www.linkedin.com/company/amxsol" target="_blank" rel="noopener noreferrer">| in |</a>
            <a href="https://x.com/amxsol?mx=2" target="_blank" rel="noopener noreferrer">X |</a>
            <a href="https://www.facebook.com/amxsol" target="_blank" rel="noopener noreferrer">f |</a>
            <a href="https://www.youtube.com/@amxsol" target="_blank" rel="noopener noreferrer">Y |</a>
            <a href="https://api.whatsapp.com/send?phone=your-number" target="_blank" rel="noopener noreferrer">✆ |</a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">✉ |</a>
            <a href="/your-other-page" target="_blank" rel="noopener noreferrer">🕸 |</a>
          </div>
        </div>
      </div>
    </div>


    <Tech1/>
    </div>
  );
};

export default TechnologySolutions;
