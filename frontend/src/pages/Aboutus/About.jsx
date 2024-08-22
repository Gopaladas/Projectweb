import React from "react";
import "./About.css"; // Assuming you have a separate CSS file for styles
//import videoFile from './assets/video.mp4';
import amxsolImage from "./amxsol.png";
import bgimage from "./bgimg.png";
import video from "./aboutbg.mp4";

const App = () => {
  return (
    <div
      style={{
        width: "100%" /* Set the width of the container */,
        height: "100%" /* Set the height of the container */,
        overflowY: "scroll" /* Enables vertical scroll bar */,
        overflowX: "scroll" /* Enables horizontal scroll bar (optional) */,
        border: "1px solid black" /* Optional border for visibility */,
        zIndex: "-1",
        position: "relative",
        top: "60px",
      }}
    >
      <div className="about-container ">
        <video autoPlay loop muted className="video-background">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="about-left ">
          <div className="about-content-overlay">
            {/* <h2 className="talentmain-title">What we do / Talent Solutions</h2> */}
            <div className="about-description flex">
              <div className="rectangle"></div>
              <p>WHO WE ARE / ABOUT US</p>
            </div>
            {/* <div className="home-buttons my-[50px]">
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
            </div> */}
            <p className="about-us">About us</p>
            <p
              className="description"
              style={{ marginBottom: "5rem", textAlign: "justify" }}
            >
              We are here to make a difference through people and technology.
            </p>
            <p>
              AMXSOL <span style={{ color: "red" }}>∞</span>{" "}
              <span
                style={{ fontFamily: "Canveat, serif", fontStyle: "italic" }}
              >
                infinite possibilities
              </span>
            </p>
          </div>
        </div>
        <div className="About-right">
          {/* <h1 className="home-right-title">AMXSOL</h1>
          <h3 className="home-right-subtitle">
            365 DAYS
            <br />
            VALUE ADDED
          </h3> */}
          {/* <p className="talentmain-right-description">
            Providing businesses with top quality talent solutions and services
            with multi specialties at a lower cost.
          </p> */}

          <div className="items-center text-center">
            <p>
              AMXSOL <span style={{ color: "red" }}>∞</span>{" "}
              <span
                style={{ fontFamily: "Canveat, serif", fontStyle: "italic" }}
              >
                infinite possibilities
              </span>
            </p>
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

      <div className="aboutpara">
        {/* <p  style={{backgroundColor: 'transparent', lineHeight: '1.2', marginBottom:'0.0pt', margintop: '0.0pt',paddingbottom: '0.0pt', paddingleft: '0.0pt', paddingright:'0.0pt', paddingtop: '0.0pt' ,color: '#434343', fontfamily: 'Open Sans', 'Arial' ,font-weight: '800', verticalAlign: 'baseline'}}>Who we are</span></p> */}
        <p className="aboutheading">Who we are</p>
        <p style={{ lineHeight: "1.5", fontSize: "1em", color: "black" }}>
          <b>
            {" "}
            We build a greater future for business across multiple industries
            and across countries.
          </b>
        </p>

        <p className="paragraph">
          <p>
            We are here for good, driving positive change for the benefit of
            all. Every day our experts, committed team put our shared beliefs
            into action.
          </p>
          <p>
            Together, we combine innovation and collective knowledge to create
            the extraordinary. We are here to make a difference through people
            and
          </p>
          <p>
            technology. Leading our way in innovation for over 20 years, we
            strongly believe in talented people and advanced technology,
            delivering
          </p>
          <p>excellence for the world business needs.</p>
        </p>
      </div>
      <div className="aboutpara">
        <p className="aboutheading">Why we started</p>
        <p className="paragraph">
          <p>
            <b>
              AMXSOL∞<i>infinite possibilities</i>{" "}
            </b>
            is a global information technology and consulting services company.
            AMXSOL∞ employs industry problem solvers who have the{" "}
          </p>
          <p>
            expertise to understand business requirements but also possess the
            knowledge to locate inefficiencies, design and implement
            game-changing automation and{" "}
          </p>
          <p>other services. </p>

          <p>
            AMXSOL∞ is a technology consulting services company that
            consistently delivers advanced analytics, application services,
            cloud solutions, outsourcing and
          </p>
          <p>
            talent staffing services through a combination of technology, domain
            and process expertise.{" "}
          </p>

          <p>
            As an IT solutions provider, AMXSOL∞ firmly believe in making a
            difference through providing highly efficient, scalable, reliable
            and robust solutions and services{" "}
          </p>
          <p>
            to our customers. Our mission is to help customers gain strategic
            advantage and capitalize on their technology and human capital
            investments while minimizing{" "}
          </p>
          <p>costs and risks and increasing profitability. </p>
        </p>
      </div>
      <div class="twoinfo py-[40px]">
        <div clas="first">
          <p class="heading">
            <b>MISSION STATEMENT</b>
          </p>
          <p>
            Accelerating innovation through exceptional IT services and
            solutions that{" "}
          </p>
          <p>empower customers to seamlessly adapt to new technologies.</p>
        </div>

        <div class="second">
          <p class="heading">
            <b>VISION STATEMENT</b>
          </p>
          <p>
            To be recognized as the most trusted and innovative IT partner,
            delivering{" "}
          </p>
          <p>
            efficient and reliable industry-leading technology services and
            solutions.
          </p>
        </div>
      </div>

      <div className="paragrid">
        <div className="para-1">
          <p style={{ fontSize: "1.5em", fontWeight: "400", color: "#36454F" }}>
            <b>STRATEGIC</b>
          </p>
          <p style={{ fontSize: "1.5em", fontWeight: "400", color: "#36454F" }}>
            <b>LOCATIONS</b>
          </p>

          <p>
            With offices placed strategically across North America and India, we
            can assist our clients on a personal level.
          </p>
        </div>
        <div class="para-1">
          <p style={{ fontSize: "1.5em", fontWeight: "400", color: "#36454F" }}>
            <b> PROFESSIONAL</b>
          </p>
          <p style={{ fontSize: "1.5em", fontWeight: "400", color: "#36454F" }}>
            <b>TALENT</b>
          </p>
          <p>
            When you partner with System Soft, you have access to our pool of
            highly-skilled associates covering a full spectrum of expertise.
          </p>
        </div>
        <div class="para-1">
          <p style={{ fontSize: "1.5em", fontWeight: "400", color: "#36454F" }}>
            <b>LONG-TERM</b>
          </p>
          <p style={{ fontSize: "1.5em", fontWeight: "400", color: "#36454F" }}>
            <b>PARTNERSHIPS</b>
          </p>
          <p>
            We enjoy 80% repeat business from clients due to our great customer
            experience, high customer satisfaction and delivery of accelerated
            innovations.
          </p>
        </div>
        <div class="para-1">
          <p style={{ fontSize: "1.5em", fontWeight: "400", color: "#36454F" }}>
            <b>CUTTING-EDGE </b>
          </p>
          <p style={{ fontSize: "1.5em", fontWeight: "400", color: "#36454F" }}>
            <b>TECHNOLOGIES</b>
          </p>
          <p>
            We invest heavily in technologies and methods to enhance agility,
            business value and competitiveness ensuring our clients always have
            the most innovative solutions.
          </p>
        </div>
      </div>

      <div className="singlegrid">
        <p className="">CORE VALUES</p>
      </div>

      <div className="moreparas">
        <div className="innerpara">
          <p style={{ fontSize: "15px" }}>
            <b>Diversity and inclusion</b>
          </p>

          <p>
            Employees from all walks of life are welcome and we celebrate what
            makes us unique. Everyone has a voice and all individuals are
            treated fairly and respectfully. Cultural diversity allows us to
            serve customers with different backgrounds without bias. By
            prioritizing diversity and inclusion, we ensure that our people work
            together to benefit themselves, customers and the entire
            organization.
          </p>
        </div>
        <div className="innerpara">
          <p style={{ fontSize: "15px" }}>
            <b>Customer commitment</b>
          </p>

          <p>
            We are dedicated to delivering quality service and stellar customer
            support by building relationships that positively impact our
            employees and our clients. We strive for open and honest
            communication which helps create an environment of trust and ensures
            customer satisfaction.{" "}
          </p>
        </div>
        <div className="innerpara">
          <p style={{ fontSize: "15px" }}>
            <b>People Centric</b>
          </p>

          <p>
            The happiness and wellbeing of our employees and clients is our top
            priority. By connecting with people on a personal level, we strive
            to create an environment that nurtures and empowers our team to be
            its best. Happy employees take good care of customers, and in
            return, our customers always come back.
          </p>
        </div>
        <div className="innerpara">
          <p style={{ fontSize: "15px" }}>
            <b>Teamwork and collaboration</b>
          </p>

          <p>
            We collaborate across teams, functions and business units to deliver
            the best possible work. We value a work environment that gives
            employees the space to communicate openly and honestly. When
            individual employees strive to do their best, the whole team can
            successfully achieve anything.
          </p>
        </div>
      </div>

      <div className="moreparas">
        <div className="innerpara">
          <p style={{ fontSize: "15px" }}>
            <b>Transparency and accountability</b>
          </p>

          <p>
            We value open and honest communication from associates to executives
            alike and strive to create an environment where employees feel they
            are working for a company with high ethical standards. With a strong
            sense of transparency and understanding of company vision, our
            employees freely share ideas and creative solutions with a great
            degree of innovation.
          </p>
        </div>
        <div className="innerpara">
          <p style={{ fontSize: "15px" }}>
            <b>Respect</b>
          </p>

          <p>
            To us, RESPECT means creating a work environment where everyone is
            heard and valued. Our people respect themselves and each other and
            we treat one another with appreciation and dignity. We respect each
            others values and contributions to our team, customers, vendors and
            community.
          </p>
        </div>
        <div className="innerpara">
          <p style={{ fontSize: "15px" }}>
            <b>Integrity</b>
          </p>

          <p>
            We strive to do what's right when dealing with our fellow employees,
            clients, vendors, stakeholders and community. INTEGRITY means that
            we remain truthful and honest in our professional work, even when
            facing adversity. Our team understands the behaviors we must follow
            to achieve a high level of ethical culture.
          </p>
        </div>
        <div className="innerpara">
          <p style={{ fontSize: "15px" }}>
            <b>Passion</b>
          </p>

          <p>
            We are committed to achieving and outperforming our goals with
            fierce dedication. Passion is at the heart of our company culture.
            By continuously innovating, we bring unwavering enthusiasm to
            everything we do and celebrate our successes along the way.
          </p>
        </div>
      </div>
      <div className="knowmore h-full">
        <p style={{ fontSize: "1.5em", fontWeight: "600" }}>
          KNOW MORE ABOUT US
        </p>
        <p style={{ fontSize: "12px" }} className="text-center">
          About us | People | Careers | Newsroom | Foundation | Academy |
          Contact us | AMXSOL USA | AMXSOL INDIA
        </p>
        <div className="items-center text-center">
          {/* <p>
              AMXSOL <span style={{ color: "red" }}>∞</span>{" "}
              <span
                style={{ fontFamily: "Canveat, serif", fontStyle: "italic" }}
              >
                infinite possibilities
              </span>
            </p> */}
          <p className="">
            <span className="">Contact us for </span>
            ∞infinite possibilities Business Solutions | Technology Solutions |
            Talent Solutions Connect with us on:
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

      <div className="aboutpara">
        <p className="aboutheading">What we do</p>
        <div className="whatwedo">
          <p style={{ fontSize: "1.25em", fontWeight: "500" }}>
            Building greater future through collective knowledge and innovation.
          </p>
          <p>
            We go beyond helping your business transform through our Solutions.
            We help you to make a meaningful difference to your customers and to{" "}
          </p>
          <p>
            the communities you serve. AMXSOL for∞
            <b>
              <i>infinite possibilities.</i>
            </b>
          </p>
        </div>
      </div>

      <div className="aboutpara">
        <p className="aboutheading">What we can do for you</p>
      </div>
      <div className="whatwecandoforyou">
        <p
          style={{
            backgroundcolor: "transparent",
            fontSize: "1.7em",
            color: "#353935",
            fontWeight: "800",
            marginLeft: "30px",
            marginBottom: "30px",
          }}
        >
          AMXSOL∞ provides cost-effective software solutions and consulting
          services.
        </p>
      </div>
      <div className="aboutimagebg ">
        <p className="text-center">BUSINESS SOLUTIONS</p>
        <p className="text-center">TECHNOLOGY SOLUTIONS</p>
        <p className="text-center">TALENT SOLUTIONS</p>
      </div>

      <div className="capabilities h-full">
        <p style={{ fontSize: "2em" }}>OUR CAPABILITIES</p>
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

        <p style={{ fontSize: "2em" }}>INDUSTRIES WE SERVE</p>
        <p>
          Aerospace | Automotive | Banking | Chemicals | Construction |
          Education | Energy | Finance | Healthcare | Insurance | Manufacturing
          | Pharma | Retail & Wholesale | Real Estate | Software | Technology |
          Telecom |{" "}
        </p>
        <p>Transportation</p>

        <div className="">
          <p className="text-black">
            Connect with us on:{" "}
            <a
              href="https://www.linkedin.com/company/amxsol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              | in |
            </a>
            <a
              href="https://x.com/amxsol?mx=2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              X |
            </a>
            <a
              href="https://www.facebook.com/amxsol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
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
              className="text-black"
            >
              ✆ |
            </a>
            <a
              href="mailto:your-email@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              ✉ |
            </a>
            <a
              href="/your-other-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              🕸 |
            </a>
          </p>
        </div>
      </div>

      <div className="px-[40px]">
        <p className="aboutheading ">OUR APPROACH TO</p>
        <p className="partner">PARTNERSHIP</p>
      </div>

      <div className="bottomp text-justify">
        <p className="text-justify">
          Our focus is on building long-term client relationships. By becoming
          partners and trusted advisors, we are able to truly understand and
          anticipate our clients’ unique needs. This includes strategically
          placing offices across North America and India so we can help our
          clients on a very personal level based on their geographic locations.
          By doing this, we successfully help organizations achieve significant
          ROI ahead of schedule and below budget.
        </p>
        <p>
          We also believe that happy employees take good care of customers, so
          we are people-centric and strive to create an environment that
          nurtures and empowers our employees. By prioritizing the needs of our
          employees, we prioritize the needs of our clients – creating a company
          culture driven to exceed expectations.
        </p>
        <p>
          <b>
            "Our deeply collaborative approach helps our clients overcome the
            most daunting IT challenges"
          </b>
        </p>
      </div>

      <div
        style={{
          textAlign: "right",
          paddingRight: "60px",
          lineHeight: "1.6",
          marginTop: "20px",
        }}
      >
        <p style={{ color: "orange", fontSize: "1.5em" }}>
          <b>PARTNER WITH US&gt;&gt;c∞</b>{" "}
        </p>
        {/* <p>Contact us for ∞infinite possibilities  | Connect with us on: | in | X | f | Y | ✆ | ✉ | 🕸 | </p> */}
        <div className="">
          <p className="text-black">
            Connect with us on:{" "}
            <a
              href="https://www.linkedin.com/company/amxsol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              | in |
            </a>
            <a
              href="https://x.com/amxsol?mx=2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              X |
            </a>
            <a
              href="https://www.facebook.com/amxsol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
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
              className="text-black"
            >
              ✆ |
            </a>
            <a
              href="mailto:your-email@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              ✉ |
            </a>
            <a
              href="/your-other-page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black"
            >
              🕸 |
            </a>
          </p>
        </div>
      </div>

      {/* <div
        style={{
          marginLeft: "80px",
          marginTop: "50px",
          color: " #353935",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p>
            <b>
              AMXSOL worldwide Contact us for
              <span style={{ color: "red" }}>∞</span>
              <i>infinite possibilities</i>
            </b>
          </p>
          <div className="">
            <p className="text-black">
              Connect with us on:{" "}
              <a
                href="https://www.linkedin.com/company/amxsol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                | in |
              </a>
              <a
                href="https://x.com/amxsol?mx=2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                X |
              </a>
              <a
                href="https://www.facebook.com/amxsol"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
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
                className="text-black"
              >
                ✆ |
              </a>
              <a
                href="mailto:your-email@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                ✉ |
              </a>
              <a
                href="/your-other-page"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black"
              >
                🕸 |
              </a>
            </p>
          </div>
        </div>
        <img
          src={amxsolImage}
          alt="Example"
          style={{
            maxWidth: "150px",
            height: "100%",
            marginRight: "60px",
            float: "right",
          }}
        />
      </div> */}
      {/* <p
        style={{
          color: "darkblue",
          fontSize: "10px",
          float: "right",
          marginRight: "80px",
        }}
      >
        <span style={{ color: "red" }}>∞</span>
        <b>
          <i>infinite possibilities</i>
        </b>
      </p> */}
      {/* <div style={{ marginLeft: "75px", marginTop: "20px", color: "#353935" }}>
        <p>
          <b>AMXSOL USA Global Corporate Headquarters</b>
        </p>
        <p>
          1000 Northbrook Drive, Suite 100, Trevose PA 19053 USA | +1​ (215)
          268-6168 | info@amxsol.com | www.amxsol.com
        </p>
      </div> */}

      {/* <div className="moreparas ">
        <div className="innerpara morechanges">
          <p style={{ color: "#353935" }}>
            <b>AMXSOL INDIA Global Research & Delivery Center</b>
          </p>
          <p>N Heights, Hitech City, Hyderabad TG 500090 INDIA</p>
          <p>+91​ 81793 82764 | info@amxsol.com | www.amxsol.com</p>
        </div>

        <div className="innerpara morechanges">
          <p style={{ color: "#353935" }}>
            <b>AMXSOL KSA Business Development Research Facility</b>
          </p>
          <p>
            Building# 3248, C16 St, Al Aqrabiyah, Al Khobar 34445, Kingdom of
            SAUDI ARABIA
          </p>
          <p>+966 53 298 9548 | info@amxsol.com | www.amxsol.com</p>
        </div>
      </div> */}
    </div>
  );
};

export default App;
