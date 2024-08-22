import React from "react";
import newsroomImage from "./newsroom.jpg"; // Import the image from the components folder

const Newsroom = () => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <div>
        <img
          src={newsroomImage}
          alt="Newsroom"
          className="w-full h-[50vh] object-cover object-center"
        />

        {/* Top Left Text */}
        <div className="absolute top-4 left-4 text-white text-lg font-semibold">
          &gt;&gt; WHO WE ARE / NEWSROOM
        </div>

        {/* Bottom Left Text */}
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-6xl font-bold mb-2 text-red-500">Newsroom</h1>
          <p className="text-lg">
            Stay up-to-date on all press announcements by
          </p>
          <p className="text-lg font-semibold">
            AMXSOL <span className="text-red-500">∞</span> infinite
            possibilities
          </p>
        </div>

        {/* Bottom Right Contact Info */}
        <div className="absolute bottom-8 right-8 text-white text-base">
          <p className="mb-2">
            Contact us for <span className="text-red-500">∞</span> infinite
            possibilities
          </p>
          <p className="mb-2">
            Service request | Website feedback | CSR | Media
          </p>
          <p>
            Connect with us on: <span className="mr-2">in</span>
            <span className="mr-2">X</span>
            <span className="mr-2">f</span>
            <span className="mr-2">Y</span>
            <span className="mr-2">✆</span>
            <span className="mr-2">✉</span>
            <span className="mr-2">🕸</span>
          </p>
        </div>
      </div>

      {/* New Sections Below Image */}
      <div className="px-8 py-12 bg-white">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Latest News</h2>
          <p>
            Stay updated with the latest news and developments from our company.
            Here, you’ll find timely updates on our products, services, and
            community initiatives.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Media Resources</h2>
          <p>
            Access a variety of resources for media professionals, including
            high-resolution images, logos, and fact sheets. Please contact our
            media relations team for additional materials.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Logos and Images</h2>
          <p>
            Download our official logos and high-resolution images for use in
            your publications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Fact Sheets</h2>
          <p>
            Get detailed information about our company, products, and services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Media Kits</h2>
          <p>
            Download our comprehensive media kits for in-depth information about
            our latest projects and initiatives.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>
            For media inquiries, please reach out to our media relations team.
          </p>
          <p className="font-semibold">Media Relations Contact:</p>
          <p>
            Email:{" "}
            <a href="mailto:info@amxsol.com" className="text-blue-500">
              info@amxsol.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+12152686168" className="text-blue-500">
              +1 (215) 268-6168
            </a>
          </p>
        </section>

        <section>
          <p>
            We are committed to providing timely and accurate information. If
            you have any questions or need further assistance, don't hesitate to
            contact us.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Newsroom;
