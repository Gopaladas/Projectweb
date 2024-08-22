import React from 'react';
import './Tech1.css';
import mobileappsGif from '../assets/tech solutions/mobileapps.gif';
import t2Gif from '../assets/tech solutions/t2.gif';
import t3Gif from '../assets/tech solutions/t3.gif';
import t4Gif from '../assets/tech solutions/t4.gif';
import t5Gif from '../assets/tech solutions/t5.gif';
import t6Gif from '../assets/tech solutions/t6.gif';
import t7Gif from '../assets/tech solutions/t7.gif';
import t8Gif from '../assets/tech solutions/t8.gif';
import t9Gif from '../assets/tech solutions/t9.gif';
import t10Gif from '../assets/tech solutions/t10.gif';
import t11Gif from '../assets/tech solutions/t11.gif';
import t12Gif from '../assets/tech solutions/t12.gif';

const Tech1 = () => {
  const gifData = [
    { title: 'Application Development', src: mobileappsGif },
    { title: 'Cloud Solutions', src: t2Gif },
    { title: 'Data Engineering', src: t3Gif },
    { title: 'Data Analytics', src: t4Gif },
    { title: 'Data Visualization', src: t5Gif },
    { title: 'Digital Workplace', src: t6Gif },
    { title: 'Digital Experience', src: t7Gif },
    { title: 'Intelligent Automation', src: t8Gif },
    { title: 'Microsoft Solutions', src: t9Gif },
    { title: 'Mobile Applications', src: t10Gif },
    { title: 'Technology Integration', src: t11Gif },
    { title: 'Security', src: t12Gif }
  ];

  return (
    <div className="technology-container">
      {/* Intro Section */}
      <div className="technology-intro">
        <p className="technology-description">
         <span className='tech-question'> Trying to juggle productivity with cost savings?</span>
          <br />
          We get it. In an age of digital transformation, streamlining IT operations and maximizing the value of IT investments are top priority. AMXSOL can help create a digital business strategy that gives you the flexibility, bandwidth and support your business needs for success.
        </p>
      </div>

      {/* Experience and Contact Section */}
      <div className="technology-experience-contact">
        <div className="technology-experience">
          <h2>We have more than 20 years experience with the following...</h2>
        </div>
        <div className="technology-contact">
          <p>
            Contact us for ∞infinite possibilities |
            <br />
            Connect with us on: <a href="https://www.linkedin.com/company/amxsol" target="_blank" rel="noopener noreferrer">| in |</a>
            <a href="https://x.com/amxsol?mx=2" target="_blank" rel="noopener noreferrer">X |</a>
            <a href="https://www.facebook.com/amxsol" target="_blank" rel="noopener noreferrer">f |</a>
            <a href="https://www.youtube.com/@amxsol" target="_blank" rel="noopener noreferrer">Y |</a>
            <a href="https://api.whatsapp.com/send?phone=your-number" target="_blank" rel="noopener noreferrer">✆ |</a>
            <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">✉ |</a>
            <a href="/your-other-page" target="_blank" rel="noopener noreferrer">🕸 |</a>
          </p>
        </div>
      </div>

      {/* GIF Grid */}
      <div className="technology-gif-grid">
        {gifData.map((item, index) => (
          <div className="technology-gif-item" key={index}>
            <div className="technology-gif">
              <img src={item.src} alt={item.title} className="gif-image" />
            </div>
            <div className="technology-title">
              <div className="square-box"></div>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech1;
