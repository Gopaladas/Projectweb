import React from 'react';
import './Impact.css';

// Import images
import img1 from '../assets/business solutions/icons/media.png';
import img2 from '../assets/business solutions/icons/2.png';
import img3 from '../assets/business solutions/icons/3.png';
import img4 from '../assets/business solutions/icons/4.png';
import img5 from '../assets/business solutions/icons/5.png';
import img6 from '../assets/business solutions/icons/6.png';
import img7 from '../assets/business solutions/icons/7.png';
import img8 from '../assets/business solutions/icons/8.png';

const Impact = () => {
  return (
    <div className="impact-container">
      {/* Business Impact Content */}
      <div className="impact-content">
        <h2 className="impact-heading">Business Impact</h2>
        <p className="impact-description">
          AMXSOL is your trusted advisor to help and ensure the technology you are using today is truly serving your business needs.
        </p>
        <p className="impact-description1">
          We build specific solutions for you to automate crucial business processes. Our unique combination of strategy, design, development, integration, and maintenance capabilities help to deliver fast and cost-effective solutions.
        </p>
        <p className="impact-highlight">
          We are experts in the following... Contact us for <span className="impact-infi">∞ infinite possibilities</span>
        </p>
      </div>

      {/* Images with Points */}
      <div className="impact-images">
        {/* Row 1 - 6 Images */}
        <div className="impact-row impact-row-1">
          <div className="image-with-point">
            <img src={img1} alt="Accelerate Revenue" />
            <div className="impact-point">
              <span className="black-box"></span> Accelerate Revenue
            </div>
          </div>
          <div className="image-with-point">
            <img src={img2} alt="Achieving Security" />
            <div className="impact-point">
              <span className="black-box"></span> Achieving Security
            </div>
          </div>
          <div className="image-with-point">
            <img src={img3} alt="Enhance Customer Experience" />
            <div className="impact-point">
              <span className="black-box"></span> Enhance Customer Experience
            </div>
          </div>
          <div className="image-with-point">
            <img src={img4} alt="Expedite Product Development" />
            <div className="impact-point">
              <span className="black-box"></span> Expedite Product Development
            </div>
          </div>
          <div className="image-with-point">
            <img src={img5} alt="Improve Employee Experience" />
            <div className="impact-point">
              <span className="black-box"></span> Improve Employee Experience
            </div>
          </div>
          <div className="image-with-point">
            <img src={img6} alt="Optimize Costs" />
            <div className="impact-point">
              <span className="black-box"></span> Optimize Costs
            </div>
          </div>
        </div>

        {/* Row 2 - 2 Images with Content Beside */}
        <div className="impact-row impact-row-2">
          <div className="image-with-point2">
            <img src={img7} alt="Speed to Market" />
            <div className="impact-point2">
              <span className="black-box"></span> Speed to Market
            </div>
          </div>
          <div className="image-with-point2">
            <img src={img8} alt="AMXSOL" />
            <div className="impact-footer">
              <p>AMXSOL∞ | 365 days value added | Business Solutions | Technology Solutions | Talent Solutions</p>
              <p>
                Contact us for <span className="infi">∞</span> infinite possibilities | Connect with us on:
                <a href="https://www.linkedin.com/company/amxsol" target="_blank" rel="noopener noreferrer">| in |</a>
            <a href="https://x.com/amxsol?mx=2" target="_blank" rel="noopener noreferrer">X |</a>
            <a href="https://www.facebook.com/amxsol" target="_blank" rel="noopener noreferrer">f |</a>
            <a href="https://www.youtube.com/@amxsol" target="_blank" rel="noopener noreferrer">Y |</a>
            <a href="https://api.whatsapp.com/send?phone=your-number" target="_blank" rel="noopener noreferrer">✆ |</a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">✉ |</a>
            <a href="/your-other-page" target="_blank" rel="noopener noreferrer">🕸 |</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
