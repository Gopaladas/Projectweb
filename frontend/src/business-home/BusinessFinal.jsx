import React from 'react';
import './BusinessFinal.css';


import img1 from '../assets/business solutions/business-images/b1.jpg';
import img2 from '../assets/business solutions/business-images/b2.jpg';
import img3 from '../assets/business solutions/business-images/b3.jpg';
import img4 from '../assets/business solutions/business-images/b4.jpg';
import img5 from '../assets/business solutions/business-images/b5.jpg';
import img6 from '../assets/business solutions/business-images/b6.jpg';
import img7 from '../assets/business solutions/business-images/b7.jpg';
import img8 from '../assets/business solutions/business-images/b8.jpg';
import img9 from '../assets/business solutions/business-images/b9.jpg';
import img10 from '../assets/business solutions/business-images/b10.jpg';
import img11 from '../assets/business solutions/business-images/b11.jpg';
import img12 from '../assets/business solutions/business-images/b12.jpg';
import img13 from '../assets/business solutions/business-images/b13.jpg';
import img14 from '../assets/business solutions/business-images/b14.jpg';
import img15 from '../assets/business solutions/business-images/b15.jpg';
import img16 from '../assets/business solutions/business-images/b16.jpg';
import img17 from '../assets/business solutions/business-images/b17.jpg';
import img18 from '../assets/business solutions/business-images/b18.jpg';
import img19 from '../assets/business solutions/business-images/b19.jpg';
import img20 from '../assets/business solutions/business-images/b20.jpg';
import img21 from '../assets/business solutions/business-images/b21.jpg';
import img22 from '../assets/business solutions/business-images/b22.jpg';
import img23 from '../assets/business solutions/business-images/b23.jpg';
import img24 from '../assets/business solutions/business-images/b24.jpg';



const titlesAndPoints = [
  {
    title: "IT Staffing Services",
    img: img1,
    points: ["IT Staffing Services", "IT Consulting and Training"]
  },
  {
    title: "IT Strategy and Reviews",
    img: img2,
    points: ["IT Strategy","Remote working and collaboration"]
  },
  {
    title: "IT Audits",
    img: img3,
    points: ["IT Audit Review", "Business Process Review"]
  },
  {
    title: "Projects and Change",
    img: img4,
    points: ["IT Contract review and negotiation", "Software and System Selection","Project and Program Management"]
  },
  {
    title: "Technical Consulting",
    img: img5,
    points: ["Bespoke Software Sourcing", "Technical Implementation Support","IT Infrastructure Services"]
  },
  {
    title: "Cloud Services",
    img: img6,
    points: ["Cloud Computing Strategy", "Google G Suite Services","Microsoft Office 365 Services"]
  },
  {
    title: "IT Risk Management",
    img: img7,
    points: ["IT Risk Assessment", "Dispute Resolution"]
  },
  {
    title: "Outsourcing ",
    img: img8,
    points: ["IT Outsourcing", "IT Infrastructure Maintenance"]
  },
  {
    title: "M&A Due Deligence",
    img: img9,
    points: ["Prepare your exit strategy", "Evaluating IT prior to an acquisition"]
  },
  {
    title: "Professional Services",
    img: img10,
    points: ["Professional Hiring","Management Hiring","Consulting"]
  },
  {
    title: "Natural Resources",
    img: img11,
    points: ["Oil & Gas","Air Sustainable Energy","Solar Energy"]
  },
  {
    title: "Leisure & Hospitality",
    img: img12,
    points: ["Hotels","Commercials","Event Management"]
  },
  {
    title: "Financial Services",
    img: img13,
    points: ["Financial Services","Financial Solutions"]
  },
  {
    title: "Not for Profit",
    img: img14,
    points: ["NGO's","Global Social Causes"]
  },
  {
    title: "Manufacturing",
    img: img15,
    points: ["Manufacturing Industries","Small, Mid, Large Scale Units"]
  },
  {
    title: "e-Gaming",
    img: img16,
    points: ["Racing Post","Digital Gaming Apps","e-Gaming Solutions"]
  },
  {
    title: "Private Equity",
    img: img17,
    points: ["ECI Partners","Exponent Private Equity","Capital Management"]
  },
  {
    title: "Property",
    img: img18,
    points: ["Office Commercials","Residential ","Estates Management"]
  },
  {
    title: "Legal & IPO Preparing",
    img: img19,
    points: ["Software Companies","Other Industries"]
  },
  {
    title: "Education",
    img: img20,
    points: ["International Schools Partnership","Technology and Branding "]
  },
  {
    title: "Family Business",
    img: img21,
    points: ["Individual small business Support","Technology Know-how services"]
  },
  {
    title: "Technology, Media and Telecoms",
    img: img22,
    points: ["Technology Sectors","Media and Telecoms Sectors"]
  },
  {
    title: "Retail, Wholesale and Distribution",
    img: img23,
    points: ["Retail and Wholesale Network","Distribution Network"]
  },
  {
    title: "Global Consulting  and Services",
    img: img24,
    points: ["Global Support","Global Services"]
  }
];

const BusinessFinal = () => {
    return (
      <div className="businessfinal-container">
        {/* Main Heading and Introduction */}
        <div className="businessfinal-header">
          <h2 className="businessfinal-heading">Business Solutions</h2>
          <p className="businessfinal-description">
            AMXSOL∞ maintains a network of the most highly skilled IT professionals to support all of our client needs, which includes IT Application Development and business advisory services. We provide top level talent for Application Development services including the design, development, and delivery of software applications.
          </p>
        </div>
  
        {/* Titles with Images and Points */}
        <div className="businessfinal-grid">
          {titlesAndPoints.map((item, index) => (
            <div key={index} className="businessfinal-item">
              <h3 className="businessfinal-title">{item.title}</h3>
              <img src={item.img} alt={item.title} className="businessfinal-image" />
              <ul className="businessfinal-points">
                {item.points.map((point, idx) => (
                  <li key={idx} className="businessfinal-point">
                    <span className="black-box"></span> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default BusinessFinal;