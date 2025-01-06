import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white pt-8 px-4 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
      {/* Left Section: Logo and Contact Info */}
      <div className="flex flex-col items-start space-y-4">
        <img
          className="w-40 h-16 my-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmo-3mJB0QX_Qt6TEc5zxgTCARvkgj9PXiQ&s"
          alt="Logo"
        />
        <p>
          Email us at:{" "}
          <a
            href="mailto:kk@gmail.com"
            className="text-gray-300 hover:text-white"
          >
            kk@gmail.com
          </a>
        </p>
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            className="text-gray-300 hover:text-white"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-300 hover:text-white"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-300 hover:text-white"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-300 hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Middle Section: Quick Links */}
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-12">
        <div>
          <h3 className="text-2xl font-bold">Quick Links</h3>
          <ul className="my-4 space-y-2">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Additional Links */}
        <div>
          <h3 className="text-2xl font-bold">Other Links</h3>
          <ul className="my-4 space-y-2">
            <li>
              <a href="/about-us" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/help" className="hover:text-gray-400">
                Help
              </a>
            </li>
            <li>
              <a href="/founders" className="hover:text-gray-400">
                Founders
              </a>
            </li>
            <li>
              <a href="/faqs" className="hover:text-gray-400">
                FAQs
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section: Image and Info */}
      <div className="flex flex-col items-start space-y-4 mt-8 md:mt-0">
        <img
          className="w-32 h-32 my-4 object-cover rounded-full transition-transform duration-300 transform hover:scale-110"
          src="https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1666348763417.jpg-org"
          alt="Company Info"
        />
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
