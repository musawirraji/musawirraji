'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { firstRowImages, secondRowImages } from '@/constants';
import { useLenisScroll } from '@/hooks/useLenisScroll';
import { Slide } from '@/components/parralax/slide';
import styles from './style.module.css';

export default function Parallax() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  useLenisScroll();

  return (
    <main className='overflow-hidden'>
      <div className='h-[10vh]' />
      <div ref={container} className={styles.parallaxContainer}>
        <Slide
          direction='left'
          left='-40%'
          progress={scrollYProgress}
          images={firstRowImages}
        />
        <Slide
          direction='right'
          left='-25%'
          progress={scrollYProgress}
          images={secondRowImages}
        />
      </div>
      <div className='h-[10vh]' />
    </main>
  );
}
