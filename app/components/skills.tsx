import React from 'react';

const Skills = () => {
  return (
    <div className='container pt-32  ml-40'  id='skills' >
      <h1 className='text-4xl underline  mb-16 font-semibold'>Sklils</h1>
      <div className='grid  md:grid-flow-col-2 items-center'>
      <h2 className='text-3xl md:text-5xl' data-aos="zoom-in-up">Technologies I work With</h2>
      <p className='text-fuchsia-300 pt-6 pb-6 pr-96 '  data-aos="zoom-in-up">
      I specialize in a variety of modern web technologies that enhance both user experience and development efficiency. Here are some of the key technologies I work with:
      </p>
      </div>
      

      <div className='grid grid-flow-col text-3xl sm:text-4xl'>
<div className='space-y-2'>
<h2  data-aos="zoom-in-up">TypeScipt</h2>
<h2  data-aos="zoom-in-up">React.js</h2>
<h2  data-aos="zoom-in-up">Next.js</h2>
</div>
<div className='space-y-2 pb-40'>
<h2  data-aos="zoom-in-up">Tailwind</h2>
<h2  data-aos="zoom-in-up">CSS</h2>
<h2  data-aos="zoom-in-up">Node.js</h2>
</div>
      </div>
    </div>
  );
}

export default Skills
