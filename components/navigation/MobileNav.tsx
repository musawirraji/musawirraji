'use client';

import React, { useState } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import Mobile from './mobile/Mobile';

const MobileNav = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className='sm:hidden flex items-center'>
      <Image
        src='/logo.svg'
        width={80}
        height={80}
        alt='Musawir Logo'
        priority
      />
      <div className={styles.header}>
        <div className={styles.button} onClick={() => setIsActive(!isActive)}>
          <div
            className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode='wait'>
        {isActive && <Mobile setIsActive={setIsActive} />}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
