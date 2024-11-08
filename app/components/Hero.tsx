import React from 'react';
import Navbar from './Navbar';


export const Hero = () => {
  return (
    <div
    
    id="hero"
    className="min-h-screen bg-no-repeat bg-cover bg-right rounded  " 
    
    style={{
      backgroundImage: "url('https://i.pinimg.com/originals/bc/27/a4/bc27a48ec357be155c48bbd9363bfc96.gif')",
      backgroundSize: "55%",
      border: "2px solid white" // Yahan border add kiya gaya hai
      
    }}
  >
   
      <Navbar />
      {/* Yahan par aur content daal sakte hain */}
      

      <div className=' mt-44 mr-[50%] ml-32 '>
      <div className='hii'><h1 className='text-2xl font-semibold pb-3 '> <p className='heding'
     >Hello i am Haroon Rasheed ;</p> </h1></div>  
     <br />    <p >
          A passionate web developer with expertise in crafting interactive and dynamic web applications.
          I strive to create intuitive user experiences and love transforming complex problems into elegant solutions.
          Driven by curiosity and a love for coding, I'm always excited to bring new ideas to life!
        </p>
<br />
<br />
<button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 active:scale-90'>
          Learn More
        </button>
      </div>

    </div>
  );
};

export default Hero;
