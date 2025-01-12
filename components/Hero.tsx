import React from 'react';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { FaLocationArrow } from 'react-icons/fa';
import MagicButton from './ui/MagicButton';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className='relative w-screen left-[50%] right-[50%] mr-[-50vw] ml-[-50vw] '
      id='#'
    >
      <div className=' absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat' />

      <div className='relative mx-auto w-full max-w-7xl pt-10 md:pt-28'>
        <div className='pb-20 pt-20'>
          <div className='flex justify-center my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
              <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 '>
                Dynamic Web Magic With{' '}
                <span className='text-[#94A526]'>Webflow</span> & Next.js
              </h2>
              <TextGenerateEffect
                className='text-center text-[40px] md:text-5xl lg:text-6xl uppercase'
                words='Transforming Concepts into Seamless Users Experiences'
              />
              <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl max-w-[522px] '>
                Hi! I&apos;m Musawir, a Webflow & Next.js Developer specializing
                in UI/UX Development
              </p>
              <Link href='#projects'>
                <MagicButton
                  title='Show My Work'
                  icon={<FaLocationArrow />}
                  position='right'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
