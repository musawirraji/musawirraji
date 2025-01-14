'use client';

import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { motion } from 'framer-motion';
import { menuSlide } from '../anim';

import NavLink from '@/components/navigation/Link/NavLink';
import NavFooter from '../Footer/NavFooter';
import Curve from '../Curve/Curve';

interface MobileProps {
  setIsActive: (isActive: boolean) => void;
}

const navItems = [
  {
    title: 'My Approach',
    href: '#myapproach',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
  {
    title: 'Testimonial',
    href: '#testimonials',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

export default function Mobile({ setIsActive }: MobileProps) {
  const [selectedIndicator, setSelectedIndicator] = useState('#about');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-10% 0px -90% 0px',
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedIndicator(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections
    navItems.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      variants={menuSlide}
      initial='initial'
      animate='enter'
      exit='exit'
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(selectedIndicator);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                closeMenu={() => setIsActive(false)}
              ></NavLink>
            );
          })}
        </div>
        <NavFooter />
      </div>
      <Curve />
    </motion.div>
  );
}
