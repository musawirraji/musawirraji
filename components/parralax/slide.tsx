'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import { ImageType } from '@/constants';
import styles from './style.module.css';

interface SlideProps {
  direction: 'left' | 'right';
  progress: MotionValue<number>;
  left: string;
  images: ImageType[];
}

export function Slide({ direction, progress, left, images }: SlideProps) {
  const directionValue = direction === 'left' ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * directionValue, -150 * directionValue]
  );

  return (
    <motion.div
      style={{
        x: translateX,
        left,
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
      className={`relative flex whitespace-nowrap gap-2 py-5 ${styles.parallaxSlide}`}
    >
      {images.map((image, index) => (
        <div
          key={`${image.title}-${index}`}
          className='w-[300px] h-[200px] relative rounded-xl overflow-hidden group cursor-pointer flex-shrink-0'
        >
          <Image
            src={`/${image.img}`}
            alt={image.alt}
            className='object-cover transition-transform duration-500 group-hover:scale-105'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
            priority={index < 2}
            loading={index < 2 ? 'eager' : 'lazy'}
          />
          <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
            <h3 className='text-xl text-white font-semibold mb-2'>
              {image.title}
            </h3>
            <p className='text-sm text-gray-200'>{image.description}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
