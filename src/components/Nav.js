import React from 'react';
import {
  NavLink
} from "react-router-dom";

import { nav } from '../data'

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex text-white gap-x-8'>
        {nav.map((item, idx) => {
          return (
            <NavLink key={idx}>
              <a href={item.href} className='hover:text-primary-200'>
                { item.name }
              </a>
            </NavLink>
          )
        })}
      </ul>
    </nav>
  );
};

export default Nav;
