import React from "react";
import "./BusinessSolution.css";
import Impact from "./Impact";
import BusinessFinal from "./BusinessFinal";

const BusinessSolution = () => {
  return (
    <div className="businessSolution-main top-[70px]">
      <div className="businessSolution-container">
        {/* Left Section with GIF Background and Text */}
        <div className="businessSolution-left">
          <div className="businessSolution-content">
            <h2 className="businessSolution-header">
              ≫ What we do / Business Solutions
            </h2>
            <p className="businessSolution-description">
              <span className="s1">Business Solutions∞</span> <br />
              <br />
              <span className="s2">AMXSOL∞</span>
              <br />
              <span className="s2">Contact us for </span>
              <span className="infi">∞</span>infinite possibilities Business
              Solutions | Technology Solutions | Talent Solutions |
            </p>
            <div className="businessSolution-social">
              <span>Connect with us on: </span>
              <a
                href="https://www.linkedin.com/company/amxsol"
                target="_blank"
                rel="noopener noreferrer"
              >
                | in |
              </a>
              <a
                href="https://x.com/amxsol?mx=2"
                target="_blank"
                rel="noopener noreferrer"
              >
                X |
              </a>
              <a
                href="https://www.facebook.com/amxsol"
                target="_blank"
                rel="noopener noreferrer"
              >
                f |
              </a>
              <a
                href="https://www.youtube.com/@amxsol"
                target="_blank"
                rel="noopener noreferrer"
              >
                Y |
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=your-number"
                target="_blank"
                rel="noopener noreferrer"
              >
                ✆ |
              </a>
              <a
                href="mailto:your-email@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ✉ |
              </a>
              <a
                href="/your-other-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                🕸 |
              </a>
            </div>
          </div>
        </div>

        {/* Right Section with Message and Buttons */}
        <div className="businessSolution-right">
          <h3>
            We’re here to help! Tell us what you’re looking for and we’ll get
            you connected to the right people.
          </h3>
          <div className="businessSolution-buttons">
            <a
              href="https://forms.google.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="businessSolution-button"
            >
              Request for Services
              <span className="businessSolution-tooltip">
                Go to Contact Us Form
              </span>
            </a>
            <a href="/find-jobs" className="businessSolution-button">
              Find Jobs
              <span className="businessSolution-tooltip">
                Explore Job Listings
              </span>
            </a>
            <a href="/hire-alert" className="businessSolution-button">
              Hire Alert
              <span className="businessSolution-tooltip">
                Receive Hiring Alerts
              </span>
            </a>
          </div>
        </div>
      </div>

      <Impact />

      <BusinessFinal />
    </div>
  );
};

export default BusinessSolution;
