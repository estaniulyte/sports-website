import React, { useState, useEffect } from 'react';

import { header } from '../data'

import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'

import { RiMenu4Fill, RiCloseFill } from "react-icons/ri"

const Header = () => {
  const [ isActive, setIsActive ] = useState(false)

  const [ navMobile, setNavMobile] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false)
    })
  })

  const { logo, btnLoginText, btnSignupText } = header

  return (
    <header className={`${isActive ? 'bg-neutral-500 py-[16px]' : 'bg-transparent py-[20px]'} fixed z-30 transition-all duration-300 left-0 right-0  px-[20px] lg:px-[80px]`}>
      <span className='max-w-[1440px] mx-auto left-0 right-0 flex justify-between items-center'>
        <a href='/'>
          <img src={logo} alt='Logo' className='w-[55px]' />
        </a>
        <Nav />
        {/* <div className='hidden lg:flex space-x-4'>
          <button className='btn btn-sm text-white hover:text-primary-200 transition'>{ btnLoginText }</button>
          <button className='btn btn-sm btn-primary'>{ btnSignupText }</button>
        </div> */}
        <div onClick={() => setNavMobile(!navMobile)} className='lg:hidden absolute right-4'>
          { navMobile ? (
            <RiCloseFill className='text-primary-200 text-3xl cursor-pointer' />
          ) : (
          <RiMenu4Fill className='text-primary-200 text-3xl cursor-pointer' />
          )}
        </div>
        <NavMobile navMobile={navMobile} />
      </span>
    </header>
  );
};

export default Header;
