import React from "react";
import "./Home.css"; // Importing the CSS file
// import TalentServices1 from './TalentServices1';
import img1 from "./download.jfif";
import video from "./homebg.mp4";

const Home = () => {
  return (
    <div className="home-total z-0">
      <div className="home-container ">
        <video autoPlay loop muted className="video-home">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="home-left p-[50px]">
          <div className="home-content-overlay">
            {/* <h2 className="talentmain-title">What we do / Talent Solutions</h2> */}
            <p className="home-description">
              We’re here to help! Tell us what you’re looking for and we’ll get
              you connected to the right people.
            </p>
            <div className="home-buttons my-[50px]">
              <button
                onClick={() => (window.location.href = "/business-solutions")}
              >
                Business Solutions
              </button>
              <button
                onClick={() => (window.location.href = "/technology-solutions")}
              >
                Technology Solutions
              </button>
              <button>Talent Solutions</button>
            </div>
            <p className="home-subtext">Looking for something else?</p>
            <button
              className="home-request-button"
              onClick={() => (window.location.href = { img1 })}
            >
              Request for Services
            </button>
          </div>
        </div>
        <div className="home-right">
          <h1 className="home-right-title">AMXSOL</h1>
          <h3 className="home-right-subtitle">
            365 DAYS
            <br />
            VALUE ADDED
          </h3>
          {/* <p className="talentmain-right-description">
            Providing businesses with top quality talent solutions and services
            with multi specialties at a lower cost.
          </p> */}
          <div className="items-center text-center">
            <p className="home-contact">
              <span className="home-contact-bold">Contact us for </span>
              ∞infinite possibilities
            </p>
            <div className="home-services">
              <p>
                Business Solutions | Technology Solutions | Talent Solutions
              </p>
            </div>
            <div className="home-connect">
              <p>
                Connect with us on:{" "}
                <a
                  href="https://www.linkedin.com/company/amxsol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
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
              </p>
            </div>
          </div>
          {/* <p className="talentmain-footer">
            SERVICES | SOLUTIONS | PARTNER WITH US
          </p> */}
        </div>
      </div>

      <div className="home-underimage ">
        <h1 className=" headingwhat">What we do </h1>
        <p className="mono">
          Building greater future through collective knowledge and innovation.
        </p>
        <p className="mono text-justify">
          We go beyond helping your business transform through our Solutions. We
          help you to make a meaningful difference to your customers and to the
          communities you serve. AMXSOL for{" "}
          <span className="text-red-500">∞</span>
          <span className="italic ">infinite possibilities.</span>
        </p>
      </div>

      <div className="mx-[50px]">
        <p
          style={{
            backgroundcolor: "transparent",
            fontSize: "2em",
            color: "#f7be20",
            fontWeight: "700",
          }}
        >
          What we can do for you
        </p>
      </div>
      <div className="whatwecandoforyou  pr-[40px]">
        <p className="subpara">
          AMXSOL∞ provides cost-effective software solutions and consulting
          services.
        </p>
      </div>
      <div className="homeimagebg ">
        <p className="text-center">BUSINESS SOLUTIONS</p>
        <p className="text-center">TECHNOLOGY SOLUTIONS</p>
        <p className="text-center">TALENT SOLUTIONS</p>
      </div>

      <div className="capabilities px-[40px] py-[30px] h-full">
        <p style={{ fontSize: "2em", fontWeight: "600" }}>OUR CAPABILITIES</p>
        <p>
          Artificial Intelligence | Machine Learning | Business Intelligence |
          Cloud Services | Cybersecurity | Data and Analytics | Data Services |
          Backup Solutions | Business Solutions | IT Consulting | Network
          Infrastructure |{" "}
        </p>
        <p>
          Network Security | Managed IT Services | Computer Tech Support |
          Helpdesk IT Services | Digital Marketing | Managed VoIP Services |
          Business Process Outsourcing | Software Solutions | Enterprise
          Resource{" "}
        </p>
        <p>
          Planning | Software Subscriptions | Project Management | Software
          Support | Technology Solutions | Web Technologies | Digital
          Engineering | Technology Training | Talent Solutions | Recruitment
          Process{" "}
        </p>
        <p>
          Outsourcing | Finance and Risk Management | Accounting Services |
          Payroll Services | Legal Solutions | Legal Process Outsourcing | Sales
          and Marketing
        </p>

        <p style={{ fontSize: "2em", fontWeight: "600" }}>
          INDUSTRIES WE SERVE
        </p>
        <p>
          Aerospace | Automotive | Banking | Chemicals | Construction |
          Education | Energy | Finance | Healthcare | Insurance | Manufacturing
          | Pharma | Retail & Wholesale | Real Estate | Software | Technology |
          Telecom |{" "}
        </p>
        <p>Transportation</p>

        <p style={{ fontSize: "14px" }}>
          <b>
            Contact us for ∞<i>infinite possibilities</i>
          </b>{" "}
          | Service request | Website feedback | CSR | Media | Connect with us
          on:{" "}
          <span className="text-black">
            {" "}
            |<b> in </b>|<b> X</b> |<b> f</b> | <b>Y</b> | ✆ | ✉ | 🕸 |
          </span>
        </p>
      </div>

      <div className=" px-[40px]">
        <h1 className="Home-title">Who we are</h1>
        <h7 className="mono">
          We build greater future for business across multiple industries and
          countries.
        </h7>
        <p className="mono text-justify">
          We are here for good, driving positive change for the benefit of all.
          Every day our experts, committed team put our shared beliefs into
          action. Together, we combine innovation with collective knowledge to
          create the extraordinary. We are here to make a difference through
          people and technology. Leading our way in innovation for over 20
          years, we strongly believe in talented people and advanced technology,
          delivering excellence for the world business needs.
          {/* <span className="text-red-500">∞</span> */}
          {/* <span className="italic ">infinite possibilities.</span> */}
        </p>
      </div>

      <div className="w-full bg-purple-100 p-[30px]">
        <div className="w-full items center divbottom p-[20px]">
          <h1
            className="text-center"
            style={{ fontWeight: "600", fontSize: "1.5em" }}
          >
            KNOW MORE ABOUT US
          </h1>
          <p className="text-center">
            <a href="#">About us</a> | <a href="#">People</a> |{" "}
            <a href="#">Careers</a> | <a href="#">Newsroom</a> |{" "}
            <a href="#">Foundation</a> | <a href="#">Academy</a> |{" "}
            <a href="#">Contact us</a>
          </p>

          <p style={{ fontSize: "14px" }} className="text-center mt-[20px]">
            <b>
              <i
                style={{
                  fontWeight: "700",
                  fontSize: "1.5em",
                  transform: "scaleY(2)",
                }}
              >
                Contact us for
              </i>{" "}
              ∞<i>infinite possibilities</i>
            </b>{" "}
            | Service request | Website feedback | CSR | Media | Connect with us
            on: |<b> in </b>|<b> X</b> |<b> f</b> | <b>Y</b> | ✆ | ✉ | 🕸 |
          </p>
        </div>
        <div>
          <h1 className="text-center ourheading">
            OUR APPROACH TO PARTNERSHIP
          </h1>
          <div className="">
            <p
              className="text-center text-justify"
              style={{ fontSize: "1.0em" }}
            >
              Our focus is on building long-term client relationships. By
              becoming partners and trusted advisors, we are able to truly
              understand and anticipate our clients’ unique needs. This includes
              strategically placing offices across North America and India so we
              can help our clients on a very personal level based on their
              geographic locations. By doing this, we successfully help
              organizations achieve significant ROI ahead of schedule and below
              budget.
            </p>
            <br />
            <p
              className="text-center text-justify"
              style={{ fontSize: "1.0em" }}
            >
              We also believe that happy employees take good care of customers,
              so we are people-centric and strive to create an environment that
              nurtures and empowers our employees. By prioritizing the needs of
              our employees, we prioritize the needs of our clients ∞ creating a
              company culture driven to exceed expectations.
            </p>
          </div>
        </div>
        <div className="w-full my-[20px] px-[0px]">
          <p
            className=""
            style={{ fontSize: "1.7em", fontWeight: "700", color: "#f7be20" }}
          >
            PARTNER WITH US<span>{">>"}</span>∞
          </p>

          <p style={{ fontSize: "14px" }} className=" mt-[2px]">
            Connect with us on: |<b> in </b>|<b> X</b> |<b> f</b> | <b>Y</b> | ✆
            | ✉ | 🕸 |
          </p>
        </div>
      </div>

      {/* <TalentServices1/> */}
    </div>
  );
};

export default Home;
