import styles from './style.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { scale, slide } from '../anim';

interface Props {
  data: { title: string; href: string; index: number };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  closeMenu: () => void;
}

const NavLink = ({
  data,
  isActive,
  setSelectedIndicator,
  closeMenu,
}: Props) => {
  const { title, href, index } = data;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedIndicator(href);
    closeMenu();
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className={styles.indicator}
      ></motion.div>
      <Link href={href} onClick={handleClick} className={styles.linkText}>
        {title}
      </Link>
    </motion.div>
  );
};

export default NavLink;
