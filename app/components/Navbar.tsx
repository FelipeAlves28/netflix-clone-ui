'use client';
import React from 'react';
import { UserProfile } from './UserProfile';
import { NavbarLinks } from './NavbarLinks';
import { Logo } from './Logo';
import { UseScroll } from '../hooks/UseScroll';

export default function Navbar() {
  const isScrolled = UseScroll();
  return (
    <header
      className={`${isScrolled && 'bg-black'} from-background fixed top-0 z-50 flex w-full items-center justify-between bg-linear-to-b px-4 py-4 transition-all lg:px-10 lg:py-6`}
    >
      <div className='flex items-center space-x-2 md:space-x-4'>
        <Logo />
        <NavbarLinks />
      </div>
      <UserProfile />
    </header>
  );
}
