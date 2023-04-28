import React from 'react';

import { about } from '../data'

import { IoIosArrowDroprightCircle } from 'react-icons/io'

const About = () => {
  const { title, subtitle1, subtitle2, icon, link } = about
  return (
    <section className='py-[70px] md:py-[90px] lg:pt-[120px] lg:pb-[180px]'>
      <div className='container mx-auto px-[20px] lg:px-[135px]'>
        <div
          className='section-title-group justify-start'
          data-aos='fade-up'
          data-aos-delay='50'
        >
          <img src={icon} alt='' />
          <h2 className='h2 section-title'>
            { title }
            <span className='text-primary-200'>.</span>
          </h2>
        </div>
        <p
          className='md:text-body-md mb-6'
          data-aos='fade-up'
          data-aos-delay='100'
        >
          { subtitle1 }
        </p>
        <p
          className='md:text-body-md mb-9'
          data-aos='fade-up'
          data-aos-delay='150'
        >
          { subtitle2 }
        </p>
        <div
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <a className='link flex items-center gap-x-4 hover:gap-x-6 transition-all' href="#">
            {link} <IoIosArrowDroprightCircle className='text-2xl' />
          </a>
        </div>
      </div>
    </section>
  )
};

export default About;
