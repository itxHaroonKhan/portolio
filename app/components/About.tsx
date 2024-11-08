import React from 'react';

const About = () => {
  return (
    <div className='p-36 flex items-center justify-center' id='about'>
      <div className='max-w-lg text-center'>
        {/* Image */}
        <img
          src="https://i.pinimg.com/736x/aa/3d/37/aa3d3786d6ead67f131663cdda34f264.jpg" // Replace this URL with any image link
          alt="About Me"
          className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
           data-aos="zoom-in-up"
        />
        
        {/* About Content */}
        <h2 className='text-2xl font-semibold mb-2'  data-aos="zoom-in-up">About Me</h2>
        <p className='text-gray-700'  data-aos="zoom-in-up">
          I am a web developer with a passion for creating interactive and user-friendly applications.
          With a background in programming and design, I aim to deliver high-quality solutions 
          that meet client needs and exceed expectations.
        </p>
      </div>
    </div>
  );
}

export default About;
