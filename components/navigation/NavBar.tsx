import React from 'react';
import MobileNav from './MobileNav';
import Navigation from './Navigation';

const NavBar = () => {
  return (
    <section className='fixed top-0 left-0 right-0 w-full z-[9999] backdrop-blur-sm  p-10'>
      <div className='max-w-7xl mx-auto '>
        <Navigation />
        <MobileNav />
      </div>
    </section>
  );
};

export default NavBar;
