import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  const linkClass =
    'font-semibold text-xl hover:text-green-100 transition-all duration-200 ';
  return (
    <nav className='px-4 hidden sm:block'>
      <ul className='w-full flex justify-between items-center'>
        <li className='whitespace-nowrap'>
          <Link href='#about' className={linkClass}>
            About
          </Link>
        </li>
        <li className='whitespace-nowrap'>
          <Link href='#projects' className={linkClass}>
            Projects
          </Link>
        </li>
        <li>
          <Link href='#/' className={linkClass}>
            <Image
              src='/logo.svg'
              width={100}
              height={100}
              alt='Musawir Logo'
            />
          </Link>
        </li>
        <li className='whitespace-nowrap'>
          <Link href='#testimonials' className={linkClass}>
            Testimonials
          </Link>
        </li>
        <li className='whitespace-nowrap'>
          <Link href='#contact' className={linkClass}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
