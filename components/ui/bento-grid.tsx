'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { IoCopyOutline } from 'react-icons/io5';
import MagicButton from './MagicButton';
import animationData from '@/constants/confetti.json';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 lg:grid-cols-6 gap-4 max-w-7xl mx-auto px-4 md:px-16',
        className
      )}
    >
      {children}
    </div>
  );
};

const getTextStyles = (id: number) => {
  switch (id) {
    case 4:
      return {
        title:
          'text-xl md:text-2xl font-extrabold text-white md:mt-32 md:tracking-super-wide text-center uppercase text-gradient',
        description: 'text-sm flex items-baseline justify-center text-gray-200',
      };
    default:
      return {
        title:
          'font-bold text-neutral-600 dark:text-neutral-200 text-xl text-gradient uppercase',
        description:
          'font-bold text-neutral-600 text-lg dark:text-neutral-300 text-gradient',
      };
  }
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imgClassName?: string;
  tileClassName?: string;
  id: number;
}) => {
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const textStyles = getTextStyles(id);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('musawir.raji@gmail.com');
    setCopied(true);
  };

  return (
    <div
      className={cn(
        'row-span-1 relative w-full rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-custom-gradient border gradient-border justify-between flex flex-col space-y-4',
        [1, 2, 3].includes(id) && 'items-center text-center',
        className,
        id === 4 &&
          'bg-keyboard-image justify-center items-center h-52 md:h-80',
        id === 5 &&
          'bg-contact-image justify-center items-center text-center pb-10'
      )}
    >
      {id === 4 && <div className=''></div>}
      <div className='group-hover/bento:translate-x-2 transition duration-200'>
        <div className={cn('mb-2 mt-2', textStyles.title)}>{title}</div>
        {img && (
          <div className='flex justify-center py-5'>
            <Image alt={img} src={img} width={40} height={40} />
          </div>
        )}
        <div className={cn(textStyles.description)}>{description}</div>
      </div>
      {id === 5 && isMounted && (
        <div className='relative justify-center items-center flex'>
          <div className={`absolute -bottom-5 right-0`}>
            {isMounted && (
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
              />
            )}
          </div>
          <MagicButton
            title={copied ? 'Email copied' : 'Copy my email'}
            icon={<IoCopyOutline />}
            position='left'
            handleClick={handleCopy}
          />
        </div>
      )}
    </div>
  );
};
