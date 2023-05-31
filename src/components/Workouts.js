import React from 'react';

import { workouts } from '../data';

import WorkoutSlider from '../components/WorkoutSlider'

const Workouts = () => {
  const { title, icon } = workouts

  return (
    <section className='section'>
      <div
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
        data-aos='fade-up'
        data-aos-delay='100'
      >
        <img src={icon} alt='' />
        <h2 className='h2 section-title'>{ title }<span className='text-primary-200'>.</span></h2>
      </div>
      <div
      className='lg:max-w-[1500px] mx-auto'
        data-aos='fade-up'
        data-aos-delay='150'
      >
        <WorkoutSlider />
      </div>
    </section>
  )
};

export default Workouts;
