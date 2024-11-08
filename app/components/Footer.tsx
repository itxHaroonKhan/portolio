import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'; // Importing email and phone icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10"> {/* Changed to a solid background color */}
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Colorful Community</h2>
        <p className="mb-6">Follow us on social media for vibrant updates!</p>
        <div className="flex justify-center space-x-8 mb-6">
          <a href="#" className="hover:text-indigo-800 transition" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} className="text-2xl" />
            <span className="ml-2">Facebook</span>
          </a>
          <a href="#" className="hover:text-blue-500 transition" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
            <span className="ml-2">Twitter</span>
          </a>
          <a href="#" className="hover:text-blue-700 transition" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl" />
            <span className="ml-2">LinkedIn</span>
          </a>
          <a href="#" className="hover:text-red-800 transition" aria-label="YouTube">
            <FontAwesomeIcon icon={faYoutube}  className="text-3xl" />
            <span className="ml-2">YouTube</span>
          </a>
        </div>

        {/* Email Section */}
        <div className="mb-4 flex justify-center items-center">
          <AiOutlineMail className="text-white mr-2 text-2xl" size={40} />
          <span className="text-white">itxharoonkhan@gmail.com</span>
        </div>
        
        {/* Phone Section */}
        <div className="mb-4 flex justify-center items-center">
          <AiOutlinePhone className="text-white mr-2 text-2xl" size={40} />
          <span className="text-white">+92+3412231142</span> {/* Replace with your phone number */}
        </div>

        <div className="text-sm mt-6">
          <p>© {new Date().getFullYear()} Haroon Rasheed. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
