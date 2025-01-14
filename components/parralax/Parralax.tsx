'use client';

import React, { useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.css';
import { firstRowImages, ImageType, secondRowImages } from '@/constants';

interface SlideProps {
  direction: 'left' | 'right';
  progress: MotionValue<number>;
  images: ImageType[];
}

const SlideImage = React.memo(({ image }: { image: ImageType }) => (
  <div className={styles.imageWrapper}>
    <Image
      src={image.img}
      alt={image.alt}
      width={600}
      height={380}
      className={styles.image}
    />
    <div className={styles.overlay}>
      <h3 className={styles.title}>{image.title}</h3>
    </div>
  </div>
));
SlideImage.displayName = 'SlideImage';
const Slide = React.memo(({ direction, progress, images }: SlideProps) => {
  const directionValue = direction === 'left' ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [0, 100 * directionValue]);

  return (
    <motion.div
      style={{
        x: translateX,
      }}
      className={styles.slide}
    >
      {images.map((image, index) => (
        <SlideImage key={`${image.title}-${index}`} image={image} />
      ))}
    </motion.div>
  );
});
Slide.displayName = 'Slide';

export default function Parallax() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const renderSlide = useCallback(
    (direction: 'left' | 'right', images: ImageType[]) => (
      <Slide direction={direction} progress={scrollYProgress} images={images} />
    ),
    [scrollYProgress]
  );

  return (
    <div className={styles.parallaxContainer} ref={containerRef}>
      {renderSlide('left', firstRowImages)}
      {renderSlide('right', secondRowImages)}
    </div>
  );
}
